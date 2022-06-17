# How to Git Squash Properly

1. Check out your primary branch.
    ```bash
    git checkout main
    ```
2. Get the latest from origin.
    ```bash
    git pull
    ```
3. Check out your wip branch.
    ```bash
    git checkout <your_branch>
    ```
4. Rebase interactively with your primary branch.
    ```bash
    git rebase -i main
    ```
5. In the editor select the commits you wish to keep and those you wish to squash, pick or fixup. (See [git interactive rebase-squash-amend-rewrite](https://thoughtbot.com/blog/git-interactive-rebase-squash-amend-rewriting-history)).  The following configuration will swash 4 commits into two.
    ```bash
    pick 07c5abd Introduce OpenPGP and teach basic usage
    s de9b1eb Fix PostChecker::Post#urls
    f 3e7ee36 Hey kids, stop all the highlighting
    pick fa20af3 git interactive rebase, squash, amend
    ```
6. Save the commit.
7. Since you have re-written history, you have to force push your changes.
    ```bash
    git push -f origin <your_branch>
    ```


# Approach 2
git checkout yourBranch
git reset $(git merge-base $(basename $(git rev-parse --abbrev-ref origin/HEAD)) $(git rev-parse --abbrev-ref HEAD))
git add -A
git commit -m "one commit on yourBranch"



git checkout yourBranch
git reset $(git merge-base master $(git branch --show-current))
git add -A
git commit -m "one commit on yourBranch"