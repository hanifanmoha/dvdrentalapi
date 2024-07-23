Tutorial : https://blog.logrocket.com/how-to-set-up-node-typescript-express/

Example Readme : https://gist.github.com/azagniotov/a4b16faf0febd12efbc6c3d7370383a6

Mermaid : 
  erDiagram
      FILM }|..|| LANGUAGE : _
      CATEGORY }|..|{ FILM : _
      ACTOR }|..|{ FILM : _
      RENTAL }|..|| CUSTOMER : _
      RENTAL }|..|| FILM : _
      RENTAL }|..|| STAFF : _
      STORE ||..|| STAFF : manager