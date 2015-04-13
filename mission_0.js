function add(a,b)
{
	return a+b;
}

function sub(a,b)
{
	return a-b;
}

function mul(a,b)
{
	return a*b;
}

function div(a,b)
{
	return a/b;
}

function test_of_add()
{
	var sum = add(2,3);
	if (sum == 5)
	{
		console.log('add ok');
	}
	else
	{
		console.log('add failed');
	}
}

function test_of_sub()
{
	var diff = sub(5,2);
	if (diff == 3)
	{
		console.log('sub ok');
	}
	else
	{
		console.log('sub failed');
	}
}

function test_of_mul()
{
	var pro = mul(2,3);
	if (pro == 6)
	{
		console.log('mul ok');
	}
	else
	{
		console.log('mul failed');
	}
}

function test_of_div()
{
	var quo = div(6,2);
	if (quo == 3)
	{
		console.log('div ok');
	}
	else
	{
		console.log('div failed');
	}
}

test_of_add();
test_of_sub();
test_of_mul();
test_of_div();


