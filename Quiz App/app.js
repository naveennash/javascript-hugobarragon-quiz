const Body =  document.querySelector('.bodycs');

const Header = document.querySelector('.header');
const Headercontent = document.querySelector('.header-content')
const Label = document.querySelector('.label');
const Labelcontent = document.querySelector('.label-content')
const Divider = document.querySelector('.divider');
const Dividercontent = document.querySelector('.divider-content')
const Select = document.querySelector('.select');
const Selectcontent = document.querySelector('.select-content')
const Tags = document.querySelector('.tags');
const Tagscontent = document.querySelector('.tags-content')
const Checks = document.querySelector('.checkboxes');
const Checkcontent = document.querySelector('.checks-content')
const Radio = document.querySelector('.radiobuttons');
const Radiocontent = document.querySelector('.radio-content')
const Text = document.querySelector('.textinput');
const Textcontent = document.querySelector('.text-content')
const Number = document.querySelector('.numberinput')
const Numbercontent = document.querySelector('.number-content')
const Mtline = document.querySelector('.mtlninput')
const Mtlinecontent = document.querySelector('.mtln-content')
const Rating = document.querySelector('.rating')
const Ratingcontent = document.querySelector('.rating-content')
const Date = document.querySelector('.datepicker')
const Datecontent = document.querySelector('.date-content')

const DeleteH = document.querySelector('.delete-iconH')
const DeleteL = document.querySelector('.delete-iconL')
const DeleteD = document.querySelector('.delete-iconD')
const DeleteS = document.querySelector('.delete-iconS')
const DeleteT = document.querySelector('.delete-iconT')
const DeleteC = document.querySelector('.delete-iconC')
const DeleteR = document.querySelector('.delete-iconR')
const DeleteTE = document.querySelector('.delete-iconTE')
const DeleteN = document.querySelector('.delete-iconN')
const DeleteM = document.querySelector('.delete-iconM')
const DeleteRA = document.querySelector('.delete-iconRA')
const DeleteDA = document.querySelector('.delete-iconDA')

const EditH = document.querySelector('.edit-iconH')
const EditL = document.querySelector('.edit-iconL')
const EditD = document.querySelector('.edit-iconD')
const EditS = document.querySelector('.edit-iconS')
const EditT = document.querySelector('.edit-iconT')
const EditC = document.querySelector('.edit-iconC')
const EditR = document.querySelector('.edit-iconR')
const EditTE = document.querySelector('.edit-iconTE')
const EditN = document.querySelector('.edit-iconN')
const EditM = document.querySelector('.edit-iconM')
const EditRA = document.querySelector('.edit-iconRA')
const EditDA = document.querySelector('.edit-iconDA')


const editcontent = document.querySelector('.edit')
const cancelbtn = document.querySelectorAll('.cancel')
const savebtn = document.querySelector('.save');
EditH.addEventListener('click',function(){displayEdit(editcontent,Headercontent)})
EditL.addEventListener('click',function(){displayEdit(editcontent,Labelcontent)})
EditD.addEventListener('click',function(){displayEdit(editcontent,Dividercontent)})
EditS.addEventListener('click',function(){displayEdit(editcontent,Selectcontent)})
EditT.addEventListener('click',function(){displayEdit(editcontent,Tagscontent)})
EditC.addEventListener('click',function(){displayEdit(editcontent,Checkcontent)})
EditR.addEventListener('click',function(){displayEdit(editcontent,Radiocontent)})
EditTE.addEventListener('click',function(){displayEdit(editcontent,Textcontent)})
EditN.addEventListener('click',function(){displayEdit(editcontent,Numbercontent)})
EditM.addEventListener('click',function(){displayEdit(editcontent,Mtlinecontent)})
EditRA.addEventListener('click',function(){displayEdit(editcontent,Ratingcontent)})
EditDA.addEventListener('click',function(){displayEdit(editcontent,Datecontent)})


Header.addEventListener('click',function(){display(Headercontent)});
Label.addEventListener('click',function(){display(Labelcontent)});
Divider.addEventListener('click',function(){display(Dividercontent)});
Select.addEventListener('click',function(){display(Selectcontent)});
Tags.addEventListener('click',function(){display(Tagscontent)});
Checks.addEventListener('click',function(){display(Checkcontent)});
Radio.addEventListener('click',function(){display(Radiocontent)});
Text.addEventListener('click',function(){display(Textcontent)})
Number.addEventListener('click',function(){display(Numbercontent)})
Mtline.addEventListener('click',function(){display(Mtlinecontent)})
Rating.addEventListener('click',function(){display(Ratingcontent)})
Date.addEventListener('click',function(){display(Datecontent)})

DeleteH.addEventListener('click',function(){deletekey(Headercontent)});
DeleteL.addEventListener('click',function(){deletekey(Labelcontent)});
DeleteD.addEventListener('click',function(){deletekey(Dividercontent)});
DeleteS.addEventListener('click',function(){deletekey(Selectcontent)});
DeleteT.addEventListener('click',function(){deletekey(Tagscontent)});
DeleteC.addEventListener('click',function(){deletekey(Checkcontent)});
DeleteR.addEventListener('click',function(){deletekey(Radiocontent)});
DeleteTE.addEventListener('click',function(){deletekey(Textcontent)})
DeleteN.addEventListener('click',function(){deletekey(Numbercontent)})
DeleteM.addEventListener('click',function(){deletekey(Mtlinecontent)})
DeleteRA.addEventListener('click',function(){deletekey(Ratingcontent)})
DeleteDA.addEventListener('click',function(){deletekey(Datecontent)})
/*Delete.forEach((del) => {
    const delcontent = del.firstChild;
    console.log(delcontent);
   // del.addEventListener('click',function(){deletekey(delcontent)})
});*/


function display(content){
    const display = content.style.display;
    if(display === 'none'){
        content.style.display = 'block';
    }
    else{
        content.style.display = 'none';
    }
}

function deletekey(dcontent){
    confirm("Are you sure?")
    const display = dcontent.style.display;
    if(display === 'block'){
        dcontent.style.display = 'none';
    }
    else{
        content.style.display = 'block';
    }
}
const right = document.querySelector('.right');
function displayEdit(content,editcon){
    //console.log(content.parentElement[0].innerHTML);
    document.querySelector('.edit-header').innerHTML = editcon.children[0].children[0].innerHTML;
    const display = content.style.display;
    if(display === 'none'){
        content.style.display = 'block';
        Body.style.backgroundColor = '#f9f9f9';
    }
    else{
        content.style.display = 'none';
    }
    savebtn.addEventListener('click',function(){
        editcon.children[1].innerHTML = document.getElementById('edited-text').value;
        content.style.display = 'none';
    })
    for(let e of cancelbtn){
        e.addEventListener('click',function(){
            content.style.display = 'none';
    }
    )}
}


const previewcontent = document.querySelector('.preview')
const previewcenter = document.querySelector('.preview-center')
const previewbtn = document.querySelector('.btn');
previewbtn.addEventListener('click',function(){prevdisplay(previewcontent)})

function prevdisplay(content){
    const display = content.style.display;
    if(display === 'none'){
        content.style.display = 'block';
        Body.style.backgroundColor = '#f9f9f9';
    }
    else{
        content.style.display = 'none';
    }

    for(let i=0;i<right.children.length;i++)
    {
        let newprevclass = '.prevchange'+i;
        //let newprevclass = document.querySelector('.prevchange').className+i;
        console.log(newprevclass);
        let diss = right.children[i]
        if(right.children[i].style.display === 'block')
        {
            console.log(diss.children[1].innerHTML);
            document.querySelector(newprevclass).innerHTML = diss.children[1].innerHTML;
            
        }
        let newdiv = document.createElement('p');
            newdiv.className = 'prevchange'+(i+1);
            document.querySelector('.preview-center').appendChild(newdiv);
    }

    for(let e of cancelbtn){
        e.addEventListener('click',function(){
            content.style.display = 'none';
    }
    )}
}



