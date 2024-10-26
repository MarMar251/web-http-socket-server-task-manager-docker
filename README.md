# Multi-threaded WebServers tasks executor using WebHttpServer and WebServerSocket

This project aims to create two kinds of multi-threaded web servers (with thread-pooling) for executing simple tasks.
There are three tasks implemented and the user can add more (see details below).
The web servers receive the command and the parameter(s) for running a task through terminal command `curl`.

_P.S. There is another project where I used *ServerSocker* in GitHub: [localhost-chat-socket](https://github.com/wagnerjfr/localhost-chat-socket)_

## Full article
### [Unveiling Two Dynamic Multi-Threaded Web Servers for Task Execution](https://levelup.gitconnected.com/unveiling-two-dynamic-multi-threaded-web-servers-for-task-execution-62644e78a04a)
_Different Type of Web Serves Using HttpServer and ServerSocket_

## WebServers
* **WebServerHttp** is developed using *HttpServer* [[javadoc](https://docs.oracle.com/javase/8/docs/jre/api/net/httpserver/spec/com/sun/net/httpserver/HttpServer.html)].

* **WebServerSocket** is developed using *ServerSocket* [[javadoc](https://docs.oracle.com/javase/8/docs/api/java/net/ServerSocket.html)].

Both web servers use *ExecutorService* [[javadoc](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ExecutorService.html)] that executes each submitted task in the pooled thread, more specifically, `Executors.newCachedThreadPool()` which is an unbounded thread pool with automatic thread reclamation [[javadoc](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/Executors.html#newCachedThreadPool--)].

=


