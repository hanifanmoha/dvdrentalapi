# DVD Rental API

## General

- Base URL : https://dvdrentalapi.vercel.app

- ER Diagram

![ER Diagram](https://dvdrentalapi.vercel.app/erd.png)

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

### Language Resources

#### Get languages

<details>

<summary><code>GET</code> <code><b>/languages</b></code></summary>

##### Parameters

> | name   | type     | data type | default | description                |
> | ------ | -------- | --------- | ------- | -------------------------- |
> | page   | optional | number    | 1       | page                       |
> | length | optional | number    | 10      | number of results per page |
> | search | optional | text      |         | search key                 |

##### Responses

> | http code | content-type       | response                    |
> | --------- | ------------------ | --------------------------- |
> | `200`     | `application/json` | List of languages paginated |

##### Example

> https://dvdrentalapi.vercel.app/languages?page=1&length=10&search=japan

> ```javascript
>  curl --location 'https://dvdrentalapi.vercel.app/languages?page=1&length=10&search=japan'
> ```

</details>

#### Get language by ID

<details>

<summary><code>GET</code> <code><b>/languages/:id</b></code></summary>

##### Parameters

> | name | type     | data type | default | description |
> | ---- | -------- | --------- | ------- | ----------- |
> | id   | required | number    |         | Language ID |

##### Responses

> | http code | content-type       | response        |
> | --------- | ------------------ | --------------- |
> | `200`     | `application/json` | Language Object |
> | `404`     | `application/json` | Not Found Error |

##### Example

> https://dvdrentalapi.vercel.app/languages/1

> ```javascript
>  curl --location 'https://dvdrentalapi.vercel.app/languages/1'
> ```

</details>

---

### Category Resources

#### Get categories

<details>

<summary><code>GET</code> <code><b>/categories</b></code></summary>

##### Parameters

> | name   | type     | data type | default | description                |
> | ------ | -------- | --------- | ------- | -------------------------- |
> | page   | optional | number    | 1       | page                       |
> | length | optional | number    | 10      | number of results per page |
> | search | optional | text      |         | search key                 |

##### Responses

> | http code | content-type       | response                     |
> | --------- | ------------------ | ---------------------------- |
> | `200`     | `application/json` | List of categories paginated |

##### Example

> https://dvdrentalapi.vercel.app/categories?page=1&length=10&search=act

> ```javascript
>  curl --location 'https://dvdrentalapi.vercel.app/categories?page=1&length=10&search=act'
> ```

</details>

#### Get categories by ID

<details>

<summary><code>GET</code> <code><b>/categories/:id</b></code></summary>

##### Parameters

> | name | type     | data type | default | description |
> | ---- | -------- | --------- | ------- | ----------- |
> | id   | required | number    |         | Category ID |

##### Responses

> | http code | content-type       | response        |
> | --------- | ------------------ | --------------- |
> | `200`     | `application/json` | Category Object |
> | `404`     | `application/json` | Not Found Error |

##### Example

> https://dvdrentalapi.vercel.app/categories/1

> ```javascript
>  curl --location 'https://dvdrentalapi.vercel.app/categories/1'
> ```

</details>

---

### Customer Resources

#### Get customers

<details>

<summary><code>GET</code> <code><b>/customers</b></code></summary>

##### Parameters

> | name   | type     | data type | default | description                |
> | ------ | -------- | --------- | ------- | -------------------------- |
> | page   | optional | number    | 1       | page                       |
> | length | optional | number    | 10      | number of results per page |
> | search | optional | text      |         | search key                 |

##### Responses

> | http code | content-type       | response                    |
> | --------- | ------------------ | --------------------------- |
> | `200`     | `application/json` | List of customers paginated |

##### Example

> https://dvdrentalapi.vercel.app/customers?page=1&length=10&search=mar

> ```javascript
>  curl --location 'https://dvdrentalapi.vercel.app/customers?page=1&length=10&search=mar'
> ```

</details>

#### Get customer by ID

<details>

<summary><code>GET</code> <code><b>/customers/:id</b></code></summary>

##### Parameters

> | name   | type     | data type | default | description                |
> | ------ | -------- | --------- | ------- | -------------------------- |
> | id     | required | number    |         | Customer ID                |
> | page   | optional | number    | 1       | page                       |
> | length | optional | number    | 10      | number of results per page |

##### Responses

> | http code | content-type       | response        |
> | --------- | ------------------ | --------------- |
> | `200`     | `application/json` | Customer Object |
> | `404`     | `application/json` | Not Found Error |

##### Example

> https://dvdrentalapi.vercel.app/customers/1

> ```javascript
>  curl --location 'https://dvdrentalapi.vercel.app/customers/1'
> ```

</details>

#### Get customer rental

<details>

<summary><code>GET</code> <code><b>/customers/:id/rentals</b></code></summary>

##### Parameters

> | name | type     | data type | default | description |
> | ---- | -------- | --------- | ------- | ----------- |
> | id   | required | number    |         | Customer ID |

##### Responses

> | http code | content-type       | response                  |
> | --------- | ------------------ | ------------------------- |
> | `200`     | `application/json` | List of rentals paginated |

##### Example

> https://dvdrentalapi.vercel.app/customers/1/rentals

> ```javascript
>  curl --location 'https://dvdrentalapi.vercel.app/customers/1/rentals'
> ```

</details>

---

### Store Resources

#### Get stores

<details>

<summary><code>GET</code> <code><b>/stores</b></code></summary>

##### Parameters

> | name   | type     | data type | default | description                |
> | ------ | -------- | --------- | ------- | -------------------------- |
> | page   | optional | number    | 1       | page                       |
> | length | optional | number    | 10      | number of results per page |
> | search | optional | text      |         | search key                 |

##### Responses

> | http code | content-type       | response                 |
> | --------- | ------------------ | ------------------------ |
> | `200`     | `application/json` | List of stores paginated |

##### Example

> https://dvdrentalapi.vercel.app/stores?page=1&length=10&search=saki

> ```javascript
>  curl --location 'https://dvdrentalapi.vercel.app/stores?page=1&length=10&search=saki'
> ```

</details>

#### Get stores by ID

<details>

<summary><code>GET</code> <code><b>/stores/:id</b></code></summary>

##### Parameters

> | name | type     | data type | default | description |
> | ---- | -------- | --------- | ------- | ----------- |
> | id   | required | number    |         | Store ID    |

##### Responses

> | http code | content-type       | response        |
> | --------- | ------------------ | --------------- |
> | `200`     | `application/json` | Store Object    |
> | `404`     | `application/json` | Not Found Error |

##### Example

> https://dvdrentalapi.vercel.app/stores/1

> ```javascript
>  curl --location 'https://dvdrentalapi.vercel.app/stores/1'
> ```

</details>

---

### Staff Resources

#### Get staff

<details>

<summary><code>GET</code> <code><b>/staff</b></code></summary>

##### Parameters

> | name   | type     | data type | default | description                |
> | ------ | -------- | --------- | ------- | -------------------------- |
> | page   | optional | number    | 1       | page                       |
> | length | optional | number    | 10      | number of results per page |
> | search | optional | text      |         | search key                 |

##### Responses

> | http code | content-type       | response                |
> | --------- | ------------------ | ----------------------- |
> | `200`     | `application/json` | List of staff paginated |

##### Example

> https://dvdrentalapi.vercel.app/staff?page=1&length=10&search=mi

> ```javascript
>  curl --location 'https://dvdrentalapi.vercel.app/staff?page=1&length=10&search=saki'
> ```

</details>

#### Get staff by ID

<details>

<summary><code>GET</code> <code><b>/staff/:id</b></code></summary>

##### Parameters

> | name | type     | data type | default | description |
> | ---- | -------- | --------- | ------- | ----------- |
> | id   | required | number    |         | Staff ID    |

##### Responses

> | http code | content-type       | response        |
> | --------- | ------------------ | --------------- |
> | `200`     | `application/json` | Staff Object    |
> | `404`     | `application/json` | Not Found Error |

##### Example

> https://dvdrentalapi.vercel.app/staff/1

> ```javascript
>  curl --location 'https://dvdrentalapi.vercel.app/staff/1'
> ```

</details>

---

### Rentals Resources

#### Get rental by ID

<details>

<summary><code>GET</code> <code><b>/rentals/:id</b></code></summary>

##### Parameters

> | name | type     | data type | default | description |
> | ---- | -------- | --------- | ------- | ----------- |
> | id   | required | number    |         | Rental ID   |

##### Responses

> | http code | content-type       | response        |
> | --------- | ------------------ | --------------- |
> | `200`     | `application/json` | Rental Object   |
> | `404`     | `application/json` | Not Found Error |

##### Example

> https://dvdrentalapi.vercel.app/rentals/1

> ```javascript
>  curl --location 'https://dvdrentalapi.vercel.app/rentals/1'
> ```

</details>

---
