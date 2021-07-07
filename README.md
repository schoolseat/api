# Api

### `yarn install` or `npm install`

The app are in development mode.

### `yarn start` or `npm start`

## You may use postman or insomnia

### Useful routes

| URL             | Method | Info               |
| --------------- | ------ | ------------------ |
| /api/users      | GET    | Shows all users.   |
| /api/users/id   | GET    | Shows a user.      |
| /api/users      | POST   | Create a user      |
| /api/users/id   | DELETE | Delete a user.     |
| /api/classes    | GET    | Shows all classes. |
| /api/classes/id | GET    | Shows a classe.    |
| /api/classes    | POST   | Create a classe    |
| /api/classes/id | DELETE | Delete a classe.   |
| /api/content    | GET    | Shows all content. |
| /api/content/id | GET    | Shows a content.   |
| /api/content    | POST   | Create a content   |
| /api/content/id | DELETE | Delete a content.  |
| /api/lessons    | GET    | Shows all lessons. |
| /api/lessons/id | GET    | Shows a lesson.    |
| /api/lessons    | POST   | Create a lesson    |
| /api/lessons/id | DELETE | Delete a content.  |
| /api/messages   | GET    | Shows all messages.|
| /api/messages/id| GET    | Shows a message.   |
| /api/messages   | POST   | Create a message   |
| /api/messages/id| DELETE | Delete a message.  |


### Example body request for post a class:

```json
{
    "_id": "0",
    "class": "512",
    "discipline": "Math",
    "content": "Operators (-,+,/,*)",
    "icon": "icone",
    "color": "blue",
    "bio": "Math test next week",
    "school": "Hogwards",
    "teacher": {
            "createdAt": "2021-07-05T12:40:24.034Z",
            "classes": [],
            "ownedClasses": [
                "0"
            ],
            "_id": "0",
            "password": "shouldnotpass",
            "email": "mail@mail.com",
            "name": "John Doe",
            "nickname": "Jon",
            "profilePic": "https://dummyimage.com/120x330/ff00ff/ffffff.png&text=JohnDoe",
            "bornDate": "01/01/2001",
            "bio": "Knowledge is power",
            "stars": "5",
            "level": "80",
            "xp": "42000"
    },
    "lessons": ["0","1"],
    "users":  ["0","1"],
    "content":  ["0","1"]
}
```
### Example body request for post a user:

```json
{
    "classes": [],
    "ownedClasses": [
        "0"
    ],
    "_id": "0",
    "password": "shouldnotpass",
    "email": "mail@mail.com",
    "name": "John Doe",
    "nickname": "Jon",
    "profilePic": "https://dummyimage.com/120x330/ff00ff/ffffff.png&text=JohnDoe",
    "bornDate": "01/01/2001",
    "bio": "Knowledge is power",
    "stars": "5",
    "level": "80",
    "xp": "42000",
    "createdAt": "2021-07-05T12:40:24.034Z",
}
```
### Example body request for post a lesson:
```json
{
  	"_id": "0",
	"deadline": "1625580156225",
	"title": "Operators test",
	"content": "Operators test that we studied",
    "text": "this test is our ...",
    "activityLink": "https://docs.google.com/forms/",
    "createdAt": "2021-07-05T12:40:24.034Z",
}
```
### Example body request for post a content:
```json
{
  	"_id": "0",
	"deadline": "1625580156225",
	"title": "Operators",
	"content": "Operators are very important",
    "text": "They are used everyday...",
    "createdAt": "2021-07-05T12:40:24.034Z",
}
```
### Example body request for post a message:
```json
{
    "_id": "0",
	"author": {
        "classes": [],
        "ownedClasses": [
            "0"
        ],
        "_id": "0",
        "password": "shouldnotpass",
        "email": "mail@mail.com",
        "name": "John Doe",
        "nickname": "Jon",
        "profilePic": "https://dummyimage.com/120x330/ff00ff/ffffff.png&text=JohnDoe",
        "bornDate": "01/01/2001",
        "bio": "Knowledge is power",
        "stars": "5",
        "level": "80",
        "xp": "42000",
        "createdAt": "2021-07-05T12:40:24.034Z",
    },
	"to":  {
       "classes": [
           "0"
       ],
        "ownedClasses": [],
        "_id": "1",
        "password": "shouldnotpass",
        "email": "mail@mail.com",
        "name": "John Doe Jr",
        "nickname": "Jonny",
        "profilePic": "https://dummyimage.com/120x330/ff00ff/ffffff.png&text=JohnDoe",
        "bornDate": "01/01/2001",
        "bio": "Knowledge is power",
        "stars": "3",
        "level": "1",
        "xp": "100",
        "createdAt": "2021-07-05T12:40:24.034Z",
	},
	"content": "You must be more focused...",
}
```
