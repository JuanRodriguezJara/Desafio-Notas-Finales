var nombre = prompt("Ingrese su Nombre:", "Juan")
var carrera = prompt("Ingrese su Carrera:", "Desarrollo Web")
var html1 = prompt("Ingrese Nota 1 Ramo HTML:","4")
var html2 = prompt("Ingrese Nota 2 Ramo HTML:", "5")
var html3 = prompt("Ingrese Nota 3 Ramo HTML:", "4")
var css1 = prompt("Ingrese Nota 1 Ramo CCS:","3")
var css2 = prompt("Ingrese Nota 2 Ramo CCS:", "4")
var css3 = prompt("Ingrese Nota 3 Ramo CCS:", "5")
var js1 = prompt("Ingrese Nota 1 Ramo JavaScript:","2")
var js2 = prompt("Ingrese Nota 2 Ramo JavaScript:", "6")
var js3 = prompt("Ingrese Nota 3 Ramo JavaScript:", "4")
document.write("<div class='container'>");
document.write("<h1>Notas Finales</h1>")

document.write("<table class='table' primary> ");
document.write("<tr>");
document.write("<th scope=''>Nombre</th>");
document.write("<td>"+nombre+"</td>");
document.write("<tr>");
document.write("<th scope='row'>Carrera</th>");
document.write("<td>"+carrera+"</td>");


document.write("<table class='table'>");
document.write("<thead>");
document.write("<tr>");
document.write("<th scope='col'>Ramo</th>");
document.write("<th scope='col'>Nota 1</th>");
document.write("<th scope='col'>Nota 2</th>");
document.write("<th scope='col'>Nota 3</th>");
document.write("<th scope='col'>Promedio</th>");
html1 = parseInt(html1);
html2 = parseInt(html2);
html3 = parseInt(html3);
css1 = parseInt(css1);
css2 = parseInt(css2);
css3 = parseInt(css3);
js1 = parseInt(js1);
js2 = parseInt(js2);
js3 = parseInt(js3);
total_divihtml = html1 + html2 + html3;
total_modulo_html = total_divihtml / 3;
total_divicss = css1 + css2 + css3;
total_modulo_css = total_divicss / 3;
total_divijs = js1 + js2 + js3;
total_modulo_js = total_divijs / 3;
document.write("</tr");
document.write("</thead>");
document.write("<tbody>");
document.write("<tr>");
document.write("<th scope='row'>HTML</th>");
document.write("<td>"+html1+"</td>");
document.write("<td>"+html2+"</td>");
document.write("<td>"+html3+"</td>");
document.write("<th>"+total_modulo_html+"</th>");
document.write("<tr>");
document.write("<th scope='row'>CSS</th>");
document.write("<td>"+css1+"</td>");
document.write("<td>"+css2+"</td>");
document.write("<td>"+css3+"</td>");
document.write("<th>"+total_modulo_css+"</th>");
document.write("<tr>");
document.write("<th scope='row'>JavaScript</th>");
document.write("<td>"+js1+"</td>");
document.write("<td>"+js2+"</td>");
document.write("<td>"+js3+"</td>");
document.write("<th>"+total_modulo_js+"</th>");
document.write("<tr>");
document.write("</tbody>");
document.write("</table");
document.write("</div>");

document.write("<table class='table'>");
document.write("<tr>");
document.write("<h6>Para aprobar el ramo JavaScript con nota 4, necesitas obtener un 4.00 en la nota 3.</h6>");




