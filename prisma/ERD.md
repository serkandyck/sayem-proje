# SAYEM Yazılım Geliştirici 5 Database Entity Relationship Diagram

```mermaid
erDiagram
"Request" {
    Int id PK
    String uuid UK
    String title
    String content
    Boolean status
    Int requestTypeId FK
    DateTime createdAt
    DateTime updatedAt
}
"RequestType" {
    Int id PK
    String name
}
"Admin" {
    String username PK
    String password
}
"Response" {
    Int id PK
    String message
    String authorName FK
    Int requestId FK
    DateTime createdAt
    DateTime updatedAt
}
"Request" }o--|| "RequestType" : requestType
"Response" }o--|| "Admin" : author
"Response" }o--|| "Request" : request
```

### `Request(Talep)`

**Properties**
  - `id`: 
  - `uuid`: 
  - `title`: 
  - `content`: 
  - `status`: 
  - `requestTypeId`: 
  - `createdAt`: 
  - `updatedAt`: 

### `RequestType(Talep Türü)`

**Properties**
  - `id`: 
  - `name`: 

### `Admin(Yetkili)`

**Properties**
  - `username`: 
  - `password`: 

### `Response(Cevap)`

**Properties**
  - `id`: 
  - `message`: 
  - `authorName`: 
  - `requestId`: 
  - `createdAt`: 
  - `updatedAt`: 