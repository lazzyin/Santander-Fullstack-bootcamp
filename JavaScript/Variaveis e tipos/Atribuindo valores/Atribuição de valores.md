<h1>Atribuição de Valores</h1>

<tb>
<tr><th>Case Type</th></tb>
<td>Original Variable as String</td>
<td>Camel Case</td>
<td>Snake Case</td>
<td>Kebab Case</td>
<td>Pascal Case</td>
<td>Upper Case Snake Case</td>
<tr><th>Example</th></tb>
<td>same awesome var</td>
<td>sameAwesomeVar</td>
<td>same_awesome_var</td>
<td>same-awesome-var</td>
<td>SameAwesomeVar</td>
<td>SOME_AWESOME_VAR</td>
</tb>

<h1>Var e let</h1>

<ul>
<li>Var: Escopo de uso global</li>
<li>let: Escopo de uso "local"</li>
</ul>

<ul>
<li>Escopos diferentes</li>
<li>Hoisting</li>
<li>Redeclaração</li>
<li>Reatribuição</li>
</ul>

<h1>Constantes</h1>

<ul>
<li>Declarada em SNAKE_UPPER_CASE</li>
<li>Escopo de bloco</li>
<li>Não faz hoisting</li>
<li>Não é possivel reatribuir valor a constante</li>
<li>Não é possivel redeclarar uma constante</li>
<li>Não é possivel fazer hoisting em uma constante</li>
</ul>


<h1>Caracteristicas</h1>
<tb>
<th><tr></tr></th>
<td>Escopo</td>
<td>redeclarar</td>
<td>reatribuir</td>
<td>hoisting</td>

<th><tr>Var</tr></th>
<td>Global ou local</td>
<td>sim</td>
<td>sim</td>
<td>sim</td>

<th><tr>const</tr></th>
<td>bloco</td>
<td>não</td>
<td>não</td>
<td>não</td>

<th><tr>let</tr></th>
<td>bloco</td>
<td>não</td>
<td>sim</td>
<td>não</td>

</tb>