const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// middleware
app.use(cors());
app.use(express.json());

const verifyJWT = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(401).send({ error: true, message: 'unauthorized access' });
  }
  const token = authorization.split(' ')[1];
  jwt.verify(token, process.env.ACCRSS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send()
    }
    req.decoded = decoded;
    next();
  })
}


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ht72zna.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const usersCollection = client.db("Tempo-Tutors").collection("users");
    const classesCollection = client.db("Tempo-Tutors").collection("Classes");
    const instructorsCollection = client.db("Tempo-Tutors").collection("Instructors");
    const cartsCollection = client.db("Tempo-Tutors").collection("Enrolled");


  

    // classes Api
    app.get('/classes', async(req, res) =>{
      const result = await classesCollection.find().toArray();
      res.send(result)
  })
  app.get('/instructors', async(req, res) =>{
      const result = await instructorsCollection.find().toArray();
      res.send(result)
  })

  app.get('/classes/:id', async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const result = await classesCollection.findOne(query);
    res.send(result);
})
  app.get('/instructors/:id', async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const result = await instructorsCollection.findOne(query);
    res.send(result);
})

    app.get('/PopularClasses', async (req, res) => {
      const query = {}
      const cursor = classesCollection.find(query).sort({ studentsNumber: -1 }).limit(6)
      const result = await cursor.toArray();
      res.send(result);
    })
    app.get('/PopularInstructor', async (req, res) => {
      const query = {}
      const cursor = instructorsCollection.find(query).sort({ numStudents: -1 }).limit(6)
      const result = await cursor.toArray();
      res.send(result);
    })
    app.get('/addedClass', async (req, res) => {
      const email = req.query.email;
      if (!email) {
        res.send([]);
      }
      const query = { email: email };
      const result = await cartsCollection.find(query).toArray();
      res.send(result);
    })

    // user API
    app.get('/users', async (req, res) => {
      const result = await usersCollection.find().toArray();
      res.send(result);
    });
    app.patch('/users/admin/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          role: 'admin'
        }
      }
      const result = await usersCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    app.patch('/users/instructor/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          role: 'instructor'
        }
      }
      const result = await usersCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    app.post('/users', async (req, res) => {
      const user = req.body;
      const query = { email: user.email }
      const existingUser = await usersCollection.findOne(query);
      if (existingUser) {
        return res.send({ message: 'user already exists' })
      }
      const result = await usersCollection.insertOne(user);
      res.send(result);
    });

   
    app.post('/addedClass', async (req, res) => {
      const item = req.body;
      const result = await cartsCollection.insertOne(item);
      res.send(result);
    });
    app.post('/addClasses', async (req, res) => {
      const item = req.body;
      const result = await classesCollection.insertOne(item);
      res.send(result);
    });
    app.post('/jwt', (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCRSS_TOKEN_SECRET, { expiresIn: '5h' })
      res.send({ token })
    })
   
    app.delete('/addedClass/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await cartsCollection.deleteOne(query);
      res.send(result)

    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
  res.send('master is running')
})

app.listen(port, () => {
  console.log(`master running on port ${port}`)
})