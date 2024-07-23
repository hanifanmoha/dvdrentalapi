# DVD Rental API

## General

- Base URL : https://dvdrentalapi.vercel.app

---

### Film Resources

#### Get films

<details>

<summary><code>GET</code> <code><b>/films</b></code></summary>

##### Parameters

> | name   | type     | data type | default | description                |
> | ------ | -------- | --------- | ------- | -------------------------- |
> | page   | optional | number    | 1       | page                       |
> | length | optional | number    | 10      | number of results per page |
> | search | optional | text      |         | search key                 |

##### Responses

> | http code | content-type       | response                |
> | --------- | ------------------ | ----------------------- |
> | `200`     | `application/json` | List of films paginated |

##### Example

> https://dvdrentalapi.vercel.app/films?page=1&length=10&search=Dinosaur

> ```javascript
>  curl --location 'https://dvdrentalapi.vercel.app/films?page=1&length=10&search=Dinosaur'
> ```

</details>

#### Get film by ID

<details>

<summary><code>GET</code> <code><b>/films/:id</b></code></summary>

##### Parameters

> | name | type     | data type | default | description |
> | ---- | -------- | --------- | ------- | ----------- |
> | id   | required | number    |         | Film ID     |

##### Responses

> | http code | content-type       | response        |
> | --------- | ------------------ | --------------- |
> | `200`     | `application/json` | Film Object     |
> | `404`     | `application/json` | Not Found Error |

##### Example

> https://dvdrentalapi.vercel.app/films/1

> ```javascript
>  curl --location 'https://dvdrentalapi.vercel.app/films/1'
> ```

</details>

---

### Actor Resources

#### Get actors

<details>

<summary><code>GET</code> <code><b>/actors</b></code></summary>

##### Parameters

> | name   | type     | data type | default | description                |
> | ------ | -------- | --------- | ------- | -------------------------- |
> | page   | optional | number    | 1       | page                       |
> | length | optional | number    | 10      | number of results per page |
> | search | optional | text      |         | search key                 |

##### Responses

> | http code | content-type       | response                 |
> | --------- | ------------------ | ------------------------ |
> | `200`     | `application/json` | List of actors paginated |

##### Example

> https://dvdrentalapi.vercel.app/actors?page=1&length=10&search=Nick

> ```javascript
>  curl --location 'https://dvdrentalapi.vercel.app/films?page=1&length=10&search=Nick'
> ```

</details>

#### Get actor by ID

<details>

<summary><code>GET</code> <code><b>/actors/:id</b></code></summary>

##### Parameters

> | name | type     | data type | default | description |
> | ---- | -------- | --------- | ------- | ----------- |
> | id   | required | number    |         | Actor ID    |

##### Responses

> | http code | content-type       | response        |
> | --------- | ------------------ | --------------- |
> | `200`     | `application/json` | Actor Object    |
> | `404`     | `application/json` | Not Found Error |

##### Example

> https://dvdrentalapi.vercel.app/actors/1

> ```javascript
>  curl --location 'https://dvdrentalapi.vercel.app/actors/1'
> ```

</details>

---
