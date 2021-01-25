# Troubleshootind

## Database connection

I add this section because I encounter some troubles when I tryed to connect Hasura to a remote database:

When I plug my Hasura instance, running in localhost docker, to a remote postgreSQL hosted on Azure(my computer run on Windows), my Hasura instance crashed for any reason(no trace error appear in Hasura logs).

Hasura logs:

![hasura logs](https://i.imgur.com/HKERz85.png)

The process exit for any reason...

PostgresSQL logs:

![postgres logs](https://i.imgur.com/kmsuuee.png)

After some research I found a [postgreSQL issue](https://www.postgresql.org/message-id/20160602.175159.60314690.horiguchi.kyotaro@lab.ntt.co.jp) in relation to Windows:

So I tried to run the same snapshot on Linux system and I didn't encounter trouble.

## Token validation

When I try to log in from my application, Hasura send me a JWT token but when I make my first call with this token I get this error:

![error](https://i.imgur.com/WB5j6R9.png)

If I try to remake the request few seconds later the request passes.

I haven't had time to look further, but so far it's been a clock issue.
