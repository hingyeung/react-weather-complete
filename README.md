What do I do if I see this error message: `Error: watch <some_path_to_file> ENOSPC`?
`> fs.inotify.max_user_watches=524288`
`> sudo sysctl -p --system`

Restart IDE if necessary.
https://confluence.jetbrains.com/display/IDEADEV/Inotify+Watches+Limit
