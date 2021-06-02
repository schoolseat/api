# api_posts_escolaplus

### `yarn install`

The app in the development mode.

### `yarn start`

## Start server in localhost:3333

## You may use postman or insomnia

### Useful exemples

| URL             | Method | Info               |
| --------------- | ------ | ------------------ |
| /api/tarefas    | POST   | Create a post.     |
| /api/tarefas/id | DELETE | Delete post by id. |

### Example body request for post lesson:

```js
{
    "_id": 2,
    "class": 471,
    "discipline": "Matematica",
    "content": "Operadores",
    "teacher": {
    "name": "Jorge Henrique",
    "profilePic": "https://avatars.dicebear.com/api/male/jorgehenrique.svg"
},
    "lessonStatus": {
    "date":"06/2/2021",
    "startHour": "8:45",
    "finishHour": "9:30",
    "isActive": false
    }
}
```
