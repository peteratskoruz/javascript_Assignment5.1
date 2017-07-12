/**
 * Created by peter on 7/4/2017.
 */

/*******area of circle***********/

function areaOfCircle(r){

    var radius=3.141592654 * r *r;

    return radius;

}

/*********storing result ************/

var resultAns= areaOfCircle(5);

document.getElementById('assign').innerHTML="The area of Circle for 5 is:" + resultAns;