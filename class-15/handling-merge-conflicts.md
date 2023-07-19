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

