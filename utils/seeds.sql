insert into states (name) values ('SC');
insert into states (name) values ('PR');
insert into states (name) values ('RS');



    select adresses.id,
           provider_id ,
           users.name
      from adresses
inner join users
        on users.id = provider_id
