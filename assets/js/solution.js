var k, n, w, a, k1;
n=Number(localStorage.getItem('n'))
if (n==0) {
    document.querySelector(".p").style.display='none';
    document.querySelector(".q").style.display='none';
    document.querySelector("#p11").style.display='none';
    document.querySelector("#q1").style.display='none';
} else if (n==1) {
    document.querySelector(".p").style.display='none';
    document.querySelector(".q").style.display='none';
    document.querySelector("#p0").style.display='none';
    document.querySelector("#q0").style.display='none';
} else {
    document.querySelector("#p0").style.display='none';
    document.querySelector("#p11").style.display='none';
    document.querySelector("#q0").style.display='none';
    document.querySelector("#q1").style.display='none';
    
}
if (Number.isInteger(n/2)) {
    k=(n/2);
    k1=(n-2)/2;
} else {
    k=((n-1)/2);
    k1=k
}
w=((factorial(2*n))/(factorial(n)**2))
a=findhcf(w,2**n)

x1= new Array()
y1= new Array()
y2= new Array()
for (let i = 0; i < (2*0.999/0.001)+1; i++) {
    x1[i]=-0.999+0.001*i;
    y1[i]=p(n,k,x1[i])
    y2[i]=qe(n,k,k1,x1[i])
}

var data1={
    x: x1,
    y: y1,
    name: 'graph',
    line: {
        color:'white',
        width: 3,
    }
}
var data2={
    x: x1,
    y: y2,
    name: 'graph',
    line: {
        color:'white',
        width: 3,
    }
}
var layout1={
    title:{
        text: '<span style="font-size:1.2em"><b>Graph of P</span><span style="font-size:0.6em">'+n+'</span><span style="font-size:1em"><b>(x) for -1<x<1<\span>',
    },
    xaxis:{
        title:{
            text: '<span style="font-size:1.6em">x<\span>',
        },
        range:[-1,1],
        gridcolor: 'white',
        gridwidth: 0.2,
        griddash:'dash',
        zerolinewidth: 1,
        showgrid: true,
        showline: true,
        tickmode: 'linear',
        tick0: 0,
        dtick: 0.25,
    },
    yaxis:{
        title:{
            text: '<span style="font-size:1.6em">P</span><span style="font-size:0.9em">'+n+'</span><span style="font-size:1.7em">(x)<\span>'
        },
        gridcolor: 'white',
        gridwidth: 0.2,
        griddash:'dash',
        zerolinewidth: 1
    },
    paper_bgcolor:'linear-gradient(to top left, darkblue 0%, rgb(0, 0, 12) 16.6%, rgb(7, 0, 0) 33.3%, rgb(7, 0, 0) 50%, rgb(7, 0, 0) 66.6%, rgb(0, 0, 12) 83.3%, darkblue 100%)',
    plot_bgcolor: 'rgb(12, 3, 12)', 
    font:{
        color: 'white',
        size: 16,
        family: 'Courier New, monospace'
    }

}
var layout2={
    title:{
        text: '<span style="font-size:1.2em"><b>Graph of Q</span><span style="font-size:0.6em">'+n+'</span><span style="font-size:1em"><b>(x) for -1<x<1<\span>',
    },
    xaxis:{
        title:{
            text: '<span style="font-size:1.6em">x<\span>',
        },
        range:[-1,1],
        gridcolor: 'white',
        gridwidth: 0.2,
        griddash:'dash',
        zerolinewidth: 1,
        tickmode: 'linear',
        tick0: 0,
        dtick: 0.25,
    },
    yaxis:{
        title:{
            text: '<span style="font-size:1.6em">Q</span><span style="font-size:0.9em">'+n+'</span><span style="font-size:1.7em">(x)<\span>'
        },
        gridcolor: 'white',
        gridwidth: 0.2,
        griddash:'dash',
        zerolinewidth: 1
    },
    paper_bgcolor:'linear-gradient(to top right, darkblue 0%, rgb(0, 0, 12) 16.6%, rgb(7, 0, 0) 33.3%, rgb(7, 0, 0) 50%, rgb(7, 0, 0) 66.6%, rgb(0, 0, 12) 83.3%, darkblue 100%)',
    plot_bgcolor: 'rgb(12, 3, 12)', 
    font:{
        color: 'white',
        size: 16,
        family: 'Courier New, monospace'
    }

}
let config={
    responsive: true,
    staticPlot: true,
    scale: 1.5
}

Plotly.newPlot('p_graph',[data1], layout1, config);
Plotly.newPlot('q_graph',[data2], layout2, config);

function pin(n) {
    t='x^'+'{'+ n +'}';
    S='\\('+(w/a) + t+'\\)';
    for (let r = 1; r < k+1; r++) {
        if (n==2*r) {
            t='\\)'
        } else if (n==2*r+1) {
            t='x\\)'
        } else{
            t='x^'+'{'+(n-2*r)+'}\\)'
        }
        if (Number.isInteger(r/2)) {
            S= S + '\\(\\ +\\ '+ Math.round(((factorial(2*n-2*r))/(factorial(n-r)*factorial(n-2*r)*factorial(r)))/a) + t;
        } else {
            S= S + '\\(\\ -\\ '+ Math.round(((factorial(2*n-2*r))/(factorial(n-r)*factorial(n-2*r)*factorial(r)))/a) + t;
        }
    } 
    return S
}

function qin(n) {
    t='x^'+'{'+ (n-1) +'}\\)';
    if (2**n==a) {
        S='\\('+(w/a)+t;
    } else {
        S='\\(\\frac {'+(w/a)+'} {'+(2**n/a)+'}'+t;
    }
    for (let r = 1; r < k1 + 1; r++) {
        if (n==2*r+1) {
            t='\\)'
        } else if (n==2*r+2) {
            t='x\\)'
        } else{
            t='x^'+'{'+(n-2*r-1)+'}\\)'
        }
        S1=0
        for (let i = 0; i < r+1; i++) {
            e=factorial(2*n-2*i)*factorial(2*i)/(factorial(n-i)*factorial(i))**2
            s=refrac(e,2**n)
            S1 = math.add(S1,s);
        }
        S2=refrac(Math.round(factorial(n-1-r)*factorial(r)),Math.round(factorial(2*r+1)*factorial(n-1-2*r)))
        S2=math.multiply(S1,S2)
        S2='\\frac {'+S2['n']+'} {'+S2['d']+'}';
        if (Number.isInteger(r/2)) {
            S= S + '\\(\\ -\\ '+ S2 + t;
        } else {
            S= S + '\\(\\ +\\ '+ S2 + t;
        }
    }
    return S
}


function p(n,k,x) {
    S=0
    for (let r = 0; r < k+1; r++) {
        S+=((-1)**r*factorial(2*n-2*r)*x**(n-2*r))/(factorial(n-r)*factorial(n-2*r)*factorial(r));   
    }
    return S/(2**n)
}

function qet(n,k,k1,x) {
    S=0
    S1=0
    for (let r = 0; r < k1+1; r++) {
        for (let i = 0; i < r+1; i++) {
            S1 += (factorial(2*n-2*i)*factorial(2*i))/(factorial(n-i)*factorial(i))**2;
        }
        S +=(-1)**(r+1)*S1*((factorial(n-1-r)*factorial(r)*x**(n-1-2*r))/(factorial(2*r+1)*factorial(n-1-2*r)))
    }
    return S/2**n
}

function qe(n,k,k1,x) {
    return p(n,k,x)*Math.atanh(x)+ qet(n,k,k1,x)
}


let promise = Promise.resolve();  // Used to hold chain of typesetting calls

function typeset(code) {
  promise = promise.then(() => MathJax.typesetPromise(code()))
                   .catch((err) => console.log('Typeset failed: ' + err.message));
  return promise;
}

typeset(() => {
    const math = document.querySelector('#coeff');
    math.innerHTML = '$$(1-x^2)y\'\'-2xy\'+'+n*(n+1)+'y=0$$';
    return [math];
});
typeset(() => {
    const math = document.querySelector('#coeff1');
    math.innerHTML = '$$y\\ =\\ C_1\\ P_{'+n+'}(x)\\ + C_2\\ Q_{'+n+'}(x)$$';
    return [math];
});
typeset(() => {
    const math = document.querySelector('#p');
    math.innerHTML = pin(n);
    return [math];
});
typeset(() => {
    const math = document.querySelector('#p2');
    math.innerHTML = pin(n);
    return [math];
});
typeset(() => {
    const math = document.querySelector('#q');
    math.innerHTML = qin(n);
    return [math];
});
if (2**n!==a && 2**n/a<100000000) {
    typeset(() => {
        const math = document.querySelector('#a');
        math.innerHTML = "\\(\\frac {1} {"+(2**n/a)+"}\\)";
        return [math];
    });
    typeset(() => {
        const math = document.querySelector('#a2');
        math.innerHTML = "\\(\\frac {1} {"+(2**n/a)+"}\\)";
        return [math];
    });
} else if (2**n/a>100000000){
    typeset(() => {
        const math = document.querySelector('#a');
        const num=2**n/a;
        math.innerHTML = "\\(\\frac {1} {"+num.toExponential(4)+"}\\)";
        return [math];
    });
    typeset(() => {
        const math = document.querySelector('#a2');
        const num=2**n/a;
        math.innerHTML = "\\(\\frac {1} {"+num.toExponential(4)+"}\\)";
        return [math];
    });
}

typeset(() => {
    const math = document.querySelector('#pn');
    math.innerHTML = "\\(P_{"+n+"}(x)=\\)";
    return [math];
});
typeset(() => {
    const math = document.querySelector('#qn');
    math.innerHTML = "\\(Q_{"+n+"}(x)=\\)";
    return [math];
});



function factorial(num) {
    if (num==0) {
        return 1
    } else if (num>0){
        return num*factorial(num-1);
    }
}

function findhcf(x,y) {
    while (Math.max(x,y) % Math.min(x,y)!=0){
        if (x>y){
            x%=y;
        } else {
            y %= x;
        }
    }
    return Math.min(x,y);
}

function gcd(a,b){
    return (b) ? gcd(b,a%b) : a;
}

function decimal2fraction (dec){
    if (dec==1){
        return {
            top: 1,
            bottom: 1,
            display: 1 + ':' + 1
        };
    } else {
        var top = dec.toString().replace(/\d+[.]/,'');
        var bottom=Math.pow(10,top.length);
        if (dec>1){
            top = +top + Math.floor(dec)*bottom;
        }
        var x=gcd(top,bottom);
        return {
            top: (top/x),
            bottom: (bottom/x),
            display: (top/x)+':'+(bottom/x)
        };
    }
}
function testdecimal(dec){
    if (Number.isInteger(dec)){
        return dec.toString();
    } else {
        var t=decimal2fraction(dec);
        return '\\frac {'+t['top']+'} {'+t['bottom']+'}';
    }
}
function refrac(x,y) {
    q=findhcf(x,y);
    q=math.fraction((x/q),(y/q));
    return q
}
var element=document.getElementById('pdf');
var opt={
    margin: 1,
    filename: 'Legendre Calculator.pdf',
    image: {type: 'jpeg', quality:0.98},
    html2canvas: {scale:3},
    jsPDF: {
        unit: 'in',
        format: 'a4',
        orientation: 'landscape'
    },
    pagebreak: {
       avoid: ['div#p_graph','div#q_graph','.we']
    }
};
var cancel=''

var $j =jQuery.noConflict();


$j(function() {
    $j('#download').click(function(e) {
        e.preventDefault();
        var dialog = $('<p style="color: purple; font-style: italic; font-weight: 600; text-align: center; Display: flex; width: 50%; font-size: 1.34em">Do you wish for your result in portrait or landscape? Landscape is suitable for bigger devices.</p>').dialog({
            modal:true,
            draggable: false,
            resizable: false,
            position: ['right','top'],
            width: 650,
            height: 400,
            dialogClass: 'ui-dialog-osx',
            buttons: {
                "Portrait": function() {
                    alert('You chose portrait.');
                    opt['jsPDF']['orientation']='portrait';
                    finish();
                    dialog.dialog('close')
                },  
                "Landscape":  function() {
                    alert('You chose landscape.');
                    finish();
                    dialog.dialog('close')
                },
                "Cancel":  function() {
                    alert('You chose cancel.<p>');
                    dialog.dialog('close');
                    cancel='c'
                }
            }
        });
    });
});

function finish() {
    html2pdf().from(element).set(opt).toPdf().get('pdf').then(function (pdf) {
        var totalPages = pdf.internal.getNumberOfPages();
        for (i = 1; i <= totalPages; i++) {
            pdf.setPage(i);
            pdf.setFontSize(12);
            pdf.setTextColor(151);
            pdf.text(0.4, pdf.internal.pageSize.getHeight() - 0.5, "LEGENDRE CALCULATOR | Copyright 2023 | Designer: INNOCENT OBASI");
            pdf.addImage("pic.jpg", 'JPEG', pdf.internal.pageSize.getWidth() - 1.1, pdf.internal.pageSize.getHeight() - 1, 0.65, 0.8);
            pdf.text('Page ' + i + ' of ' + totalPages, pdf.internal.pageSize.getWidth() - 1.4, 0.5);
        } 
    }).save();
}


