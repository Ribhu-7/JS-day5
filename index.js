for(let i=0; i<10;i++)
{
    console.log(i);
}

let a=10;
while(a >0)
{
    console.log(a);
    a--;
}

for(let j=2; j<=20 ; j+=2)
{
    console.log(j);
}

let b=2;
while(b<=20)
{
    console.log(b);
    b+=2;
}

let c=2;
do{
    console.log(c);
    c+=2;
}while(c<=20);

let tourists = ["Raj","Shyam","Ram","Sid"];
for(let a in tourists)
{
    console.log(a);
}

for(let b of tourists)
{
    console.log(b);
}

tourists.forEach((values,index)=>{               //1st parameter- value,2nd parameter - index
    console.log(values,index);
})

tourists.forEach((values,index)=>{
    console.log(index);
})