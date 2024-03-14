titulo.innerHTML='06 - Combinación de teclas Ctrl + c';
document.getElementById('formulario').style.display='none';
document.getElementById('curso').innerHTML=`<table><tbody><tr>
<th>PROPIEDAD/MÉTODO</th>
<th>DESCRIPCIÓN</th>
</tr>
<tr>
<td>altKey</td>
<td>Retorna un booleano (True/False). El valor es <code>true</code>cuando la tecla <kbd>Alt</kbd> es presionada</td>
</tr>
<tr>
<td>ctrlKey</td>
<td>Retorna un booleano (True/False). El valor es <code>true</code> cuando la tecla <kbd>Ctrl</kbd> es presionada</td>
<tr>
<td>shiftKey</td>
<td>Retorna un booleano (True/False). El valor es <code>true</code> cuando la tecla <kbd>Shift</kbd> es presionada</td>
</tr>
<tr>
<td>metaKey</td>
<td>Retorna un booleano (True/False). El valor es <code>true</code> cuando cualquiera de las teclas <kbd>Meta</kbd> es presionada</td>
</tr>
<tr>
<td>code</td>
<td>El código de la tecla física</td>
</tr>
<tr>
<td>key</td>
<td>la tecla que está siendo presionada</td>
</tr>
<tr>
<td>metodo getModifierState()</td>
<td>Retorna un booleano (True/False). El valor <code>true</code> indica el estado <code>on</code> de las siguientes teclas <kbd>CapsLock</kbd>,<kbd>NumLock</kbd>,<kbd>Alt</kbd>,<kbd>Control</kbd>,<kbd>Shift</kbd>,<kbd>Meta</kbd>,etc </td>
</tr>    
</tbody>
</table>`;


document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'c') {
     
      console.log('ok');
      console.log(event);

    }
    
  });
