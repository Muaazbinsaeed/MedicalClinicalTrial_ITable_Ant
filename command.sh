node -v
#v20.10.0
npm i





-------
#…or create a new repository on the command line
echo "# MedicalClinicalTrial_ITable_Ant" >> README.md
git init
git add README.md
#only change 1 file
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Muaazbinsaeed/MedicalClinicalTrial_ITable_Ant.git
git push -u origin main


#…or push an existing repository from the command line
git remote add origin https://github.com/Muaazbinsaeed/spark_1.git
git branch -M main
git push -u origin main

git branch
#show branch

git status
#show status

git checkout -b v1 
# Switched to a new branch "v1"
git commit -a -m 'v1 first push'
# git push -u origin main
git push -u origin v1


git checkout main
#Switched to branch 'master'

git log
#show log
