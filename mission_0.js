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

function max(a,b)
{
	if (a>b)
	{
		return a;
	}
	else
	{
		return b;
	}
}

function assert(conditon,message)
{
	if(conditon)
	{
		console.log(message + ' ok');
	}
	else
	{
		console.log(message + ' failed');
	}
}



function test_of_add()
{
	var sum = add(2,3);
	assert(sum == 5, 'add');
}

function test_of_sub()
{
	var diff = sub(5,2);
	assert(diff == 3, 'sub');
}

function test_of_mul()
{
	var prod = mul(2,3);
	assert(prod == 6,'mul');
}

function test_of_div()
{
	var quo = div(6,2);
	assert(quo == 3, 'div');
}

function test_of_max1()
{
	var m = max(4,2)
	assert(m == 4, 'given 4 and 2, max 4 is');
}

function test_of_max2()
{
	var m = max(6,10)
	assert(m == 10, 'given 6 and 10, max 10 is');
}

test_of_add();
test_of_sub();
test_of_mul();
test_of_div();
test_of_max1();
test_of_max2();

