# Bank Password Algorithm

### Context

Well, i was just scrolling Twitter when i found someone talking about how the bank password algorith works. I saw some comments of the post talking about checking if one of the numbers of array is present in password at the same position. But doing this means the password is being saved as a plain text (extremely insecure, mainly for a bank).

<img src="https://pbs.twimg.com/media/F92WDluXsAAa6IU?format=jpg&name=small" width="50%"/>

So I decided to create my own solution to this problem, with a bcrypt hashed password.

### The algorithm

Basically, I generate all the possible passwords, using the keys groups inserted. Then, I compare each sequence to the hashed password. For this example, I have a six digits password, so the max number of sequences are 2 ^ 6 = 64 (simple permutation).
