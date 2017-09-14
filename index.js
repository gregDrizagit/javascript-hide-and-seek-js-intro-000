var printThis;
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
  var rankedListArray = document.getElementsByClassName('ranked-list');

  function increaseRankBy(n)
  {
    var ranked = document.getElementsByClassName('ranked-list');

    for(var o = 0; o < ranked.length; o++)
    {
      var elements = ranked[o].querySelectorAll('li');

      for(var w = 0; w < elements.length; w++)
      {
        var number = parseInt(elements[w].innerHTML);
        //console.log(number);
        
        number += n; 
        
        elements[w].innerHTML = number; 
        console.log(number);
      }
    }
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
console.log(printThis);
