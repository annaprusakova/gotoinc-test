This is the solution to Gotoinc test task.

## Routes

- /{id}/create - select request type (order or deliver)

- /{id}/create/order - create order request
- /{id}/create/deliver - create delivery request
- /{id}/requests - list of all user requests
- /{id} - redirect to /{id}/requests
- /requests - list of all requests

## Getting Started

```bash
npm install
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
