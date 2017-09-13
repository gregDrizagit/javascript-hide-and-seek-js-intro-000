function getFirstSelector(selector)
{

  return document.querySelector(selector);

}

function nestedTarget()
{

  return document.querySelector('#nested').querySelector('.target');


}

function increaseRankBy(n)
{
  const lis1 = document.querySelector('#ranked-list')[0];
  const lis2 = document.getElementById('#ranked-list')[1];

  for(let i = 0; i < lis1.length; i++)
  {
    lis1[i].innerHTML = (i + 1).toString();

  }

  for(let i = 0; i < lis2.length; i++)
  {
    lis2[i].innerHTML = (i + 1).toString();

  }

}

function deepestChild()
{
  //Define a function `deepestChild()` that pulls out the most deeply nested child
  //from `div#grand-node`. (Remember, you can iterate over elements and call
  //`querySelector()` and `querySelectorAll()` on them. This is challenging to
  //implement correctly, but not beyond your ability!)

  //Your solution for `deepestChild()` does not need to be totally
  //generic; we don't expect it to work in every case. For example, we know that
  //`div#grand-node` has only one node at each level — for this lab, you can solve
  //for that case, and not worry about a case where there are sibling nodes.

  //**HINT**: Remember learning about breadth-first search? A similar technique
  //might come in handy here.



}
