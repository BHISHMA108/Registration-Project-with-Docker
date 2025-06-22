FROM node

ENV MONGO_DB_USERNAME=admin \  
    MONGO_DB_PASSWORD=qwerty 

RUN mkdir -p dockerProject

COPY . /dockerProject

CMD ["node", "/dockerProject/server/server.js"]


# To build the Docker image, run the following command in the terminal:
#   docker build -t dockerprojectname:1.0 .

# To run the Docker container with MongoDB connection from your host machine, use:
#   docker run -it -e MONGO_URI="mongodb://192.168.X.X:27017/projects" dockerproject:1.0

# Note: Inside the container, 'localhost' refers to the container itself.
# So, if MongoDB is running on your local machine (host), you must provide the host machine's IP address.



# We use the node image from Docker Hub as the base image for our Docker container so no need to install Node.js manually.
# The ENV command in a Dockerfile is used to set environment variables (with no space) inside your Docker image/container.
# Copy all the files from the current directory to the dockerProject directory in the container.
# if we dont want nodemodules folders then use RUN npm install