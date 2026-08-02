import os
import git
from git import Repo

# Define the repository path and the upload destination
repo_path = "/home/mofa/Documents/Portfolio/portfoliome"
upload_dest = "https://example.com/upload"

# Initialize the Git repository object
repo = Repo(repo_path)

# Define a function to upload the project
def upload_project():
    # Add all files in the repository to the index
    repo.git.add(".")
    # Commit the changes with a meaningful message
    repo.git.commit("-m", "Automated project upload")
    # Push the changes to the remote repository
    repo.git.push()
    # Upload the project to the specified destination
    # NOTE: This step depends on the specific upload mechanism (e.g., API, FTP)
    print("Project uploaded successfully")

# Call the upload function
upload_project()
