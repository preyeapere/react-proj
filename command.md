create a project on GitHub an call it react-proj

add read me and description then clone your project to vscode.

create a .gitignore node_module index.js and command.md files

copy node_module into your .gitignore file

copy content of your index.js file and change running port 3500 

change content of index.js file to inscript I love Preye

confirm if you have node on your system 
node -v
run npm init -y to create package.json file
run npm install express to create package-lock.json file

save package-lock.json in .gitignore

run node .
to run on local machine confirm by running localhost:3500 on your browser to see the server is running

push you react-proj file to GitHub

Go to your AWS account and create a server call it react-webserver

in your security group your add custom port 3500 and select from anywhere also ensure SSH port 22 from anywhere is added to the rule.

ssh to your machine

and update machine with the command

sudo apt update -y

sudo apt install nodejs

sudo apt install npm

git clone your react-proj folder on your aws machine and run ls

cd to react-proj and run node .

copy your public ip and paste on your browser with your port to see your app

####################################################################
Task 2
Create a deployment.yaml and service.yaml file in .github/workflow

Create a Dockerfile and .dockerignore files.

paste node_module inside your .dockerignore file

Run minikube start with your docker running

To Build Docker image
Run docker login
run docker images
run pip freeze > requirement.txt (without this dockerfile will not run)

Run docker build -t preyeapere/react_image2.0 .

To push your docker image to dockerhub
Run docker push preyeapere/react_image2.0 : latest

To deploy image into kubernetes cluster (single node cluster)Minikube
Run minikube start
Run kubectl get pods
Run alias k=kubectl
k get pods

create a name space 
Run k create namespace nodejs
k get ns

k apply -f deployment.yaml -n nodejs
k apply -f service.yaml -n nodejs

Run minikube service react-proj -n nodejs
 to view service nodejs/react-proj in default browser

 NB: On you deployment.yaml file place the name of your project (react-proj) copy your image name you have built and push to dockerhub to image name.
 Deployment is 2 pod running
 In service.yaml file change target port to 3500

 ##################################################

 # To install argo cd on kubernetes cluster

kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml


# To get the argocd GUI
kubectl port-forward svc/argocd-server -n argocd 8080:443

# The command to get password
#Now the username is admin but get the password by running the #below command

kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d


