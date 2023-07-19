# Handling Merge Conflicts

## Issue

* Someone on your project has merged a **_Pull Request_** into the `main` branch.
* You try to push your code to your remote branch named `branch_name` and open a **_Pull Request_** to the `main` branch.
* _GitHub_ informs you your code cannot automatically merge into the `main` branch.

### Step By Step Solution

1. Navigate to the root of your project in your  shell(your terminal/ the command line)

* `$ cd /path/to/your/project`

2. Make sure that you are on the correct branch

* `$ git branch`
_git will list local branches and put a * in front of the branch you are in_

3. Make sure you have nothing to commit. If you have un-committed changes, then commit.

* `$ git status`
_nothing to commit, working directory clean_

4. Update the local copy of origin repository

* `$ git fetch origin`

5. Merge local copy of origin/main into your local branch called `branch_name`.

* `$ git merge origin/main`

6. Open each file with conflicts in your _text editor_.

1. Find conflicting changes

* look for `<<<HEAD`, `====`, and `>>>main`
  
* these are called " merge markers"

7. merge the changes together so that the code has exactly what you want it to have.

```js
<<<<<<<<<< HEAD
  this is where the conflicting code from your branch is
  ==========
  this is where the conflicting code from the main branch is
>>>>>>>>> main

```

8. **_RUN YOUR CODE_**

* **This is possibly the most important step**
* **Just because you "handled" your merge conflict does not mean you have not broken you app.**
* Make any other need changes to get everything working correctly

9. Add your changes and commit.

* `$ git add .`
* `$ git commit -m "commit message about fixing merge conflict"`

10. push to your `branch_name` on origin.

* `$ git push origin branch_name`

11. **your pull request should be able to merge**
