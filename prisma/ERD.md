# SAYEM Yazılım Geliştirici 5 Database Entity Relationship Diagram

- [default](#default)

## default
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

### `Request`

**Properties**
  - `id`: 
  - `uuid`: 
  - `title`: 
  - `content`: 
  - `status`: 
  - `requestTypeId`: 
  - `createdAt`: 
  - `updatedAt`: 

### `RequestType`

**Properties**
  - `id`: 
  - `name`: 

### `Admin`

**Properties**
  - `username`: 
  - `password`: 

### `Response`

**Properties**
  - `id`: 
  - `message`: 
  - `authorName`: 
  - `requestId`: 
  - `createdAt`: 
  - `updatedAt`: 