Q: What do I do if I see this error message: `Error: watch <some_path_to_file> ENOSPC`?
1. Add the following line to  /etc/sysctl.conf  
`fs.inotify.max_user_watches=524288`  
2. Then apply the change  
`> sudo sysctl -p --system`

Restart IDE if necessary.  
(see https://confluence.jetbrains.com/display/IDEADEV/Inotify+Watches+Limit)

# Important
Warning: make sure this Google Map API key is properly restricted before pushing this project to public repo. 
