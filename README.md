# Tour-Management-System

## Route List

- GET - http://localhost:8080/api/v1/tour/
- GET - http://localhost:8080/api/v1/tour/6350db31c38b7864705b27c6
- PATCH UPDATE- http://localhost:8080/api/v1/tour/6350db31c38b7864705b27c6
- POST CREATE - http://localhost:8080/api/v1/tour/

---

https://docs.google.com/document/d/1OOgfe2uNEMjoDVw5-542fS5c3XzzY77G/edit?usp=sharing&ouid=105071328766000362313&rtpof=true&sd=true

Tour Management System
You are required to build an API for a tour management system for this assignment. In this system, you have to provide several endpoints to the client. The endpoints are:

GET /tours
Get all the tours
The client can select some specific fields for getting the information he needs as query.
Example: /tours?fields=name,image
Must be paginated.
(BONUS) The client can send a field (e.g. price) as query to sort the data with it.
Example: /tours?sort=price
POST /tours
Add a tour
Must have a schema and the body should be validated through it.
GET /tours/:id
Get a tour details by id
Send all the information of the tour
Increase the view count by 1 for this tour every time a user hits this endpoint.
PATCH /tour/:id
Update a tour
(BONUS) Body should be validated
GET /tour/trending
Get top 3 viewed tour
GET /tour/cheapest
Get top 3 cheapest tours
