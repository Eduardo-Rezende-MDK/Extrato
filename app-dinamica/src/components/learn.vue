<template>
  <div>
    <div class="q-pa-md">
      <q-list bordered>
        <q-expansion-item
          group="somegroup"
          icon="science"
          label="LABS1 - Start!"
          header-class="text-primary"
        >
          <q-card>
            <q-card-section>
              <p>
                Nesse modelo vou usar uma proposta de desenvolvimento em alto nivel <br>
                Criar um Componente que represente um Extrato de Conta<br>
                o objetivo é apresentar o modelo, o componente em si é apenas o contexto<br><br>
                Nessa proposta o Componente tem 2 propriedades:<br /><br />

                MOCKUP: exemplo pratico de como funciona o componente,<br />
                DESCRITOR: descrição do que o componente usa,<br />
              </p>
              <p>
                Eu dividi em paginas os exemplos so pra ter uma referencia bem simples de acompanhar no codigo fonte<br>
                Cada Labs pode ser encontrado em /pages/labs#.vue<br>
                Os botões como o abaixo, carrega ao lado a pagina indicada
              </p>
              <p>
                <q-btn label="labs1" to="/labs1" color="primary"></q-btn>
              </p>

              <p>A gente usa o componente da forma padrão:</p>
              <div class="myc">
                <pre><code class="language-html" data-lang="html">&lt;base-extrato&gt;&lt;/base-extrato&gt;</code></pre>
              </div>

              <p>
                O que vc esta vendo não é o que ta "chumbado no componente", esse é o
                MOCKUP dele!
              </p>
              <p>
                O Mockup faz parte do componente, deixei 2 botões como exemplo de como
                acessar isso<br>
                Baixei esses arquivos, o DESCRITOR a gente vai usa so no finalzinho... mas baixe ele!
              </p>
              <p>
                De maneira alguma a gente vai alterar o componente!, No proximo passo vamo
                falar em como gerar um mockup custom pro componente
              </p>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-separator />

        <q-expansion-item
        group="somegroup"
          icon="science"
          label="LABS2 - Do MOCKUP para o Meu JSON"
          header-class="text-primary"
        >
          <q-card>
            <q-card-section>
              <p>
                Aqui fiz o seguinte, peguei o mockup que exportei em arquivo, aquele botão no Labs1 faz isso se vc não clicou é so clicar!
                peguei aquela string de JSON e joguei aqui pra fica simples de editar<br>
                E ja dei uma editada nela, reduzindo pra uma verssão bem mais basica
              </p>
              <p><q-btn label="labs2" to="/labs2" color="primary"></q-btn></p>

              <p>Fica assim a chamada "real" do componente</p>

              <div class="myc">
                <pre><code class="language-html" data-lang="html">    &#x3C;base-extrato
    :data=&#x22;mock.data&#x22;
    v-model:_setup=&#x22;mock.setup&#x22;
    :events=&#x22;{ ...myEvents}&#x22;
    &#x3E;&#x3C;/base-extrato&#x3E;</code></pre>
              </div>
              <p></p>
              <p>
                Pode ver que dividi em 3 tipos os parametros:<br />
                DATA: Tudo relacionado as informações<br />
                SETUP: Tudo relacionado as configurações<br />
                EVENTS: Tudo relacionado aos eventos disparados
              </p>
              <p>
                Olhando o JSON que deixei chumbado no codigo, vc percebe que eu passei so DATA<br>
                E isso é pq SETUP e EVENTS são opcionais... A Ideia é facilitar o retorno da DATA, ou diminuir o tratamento que vc tem q aplica no result de um query<br >
                Não tem MAGICA, pra exibir a informação com cor icone e o Design dela tem q existir isso! Porem eu minimizei isso na chave t='C'<br>
                Ou seja se o meu retorno é do tipo CREDITO, toda a configuração disso ta agrupada em t='C', é um facilitador que permite vc pensa nos dados e no design de forma separada<br>
                *** t é de template hehehehe
              </p>
              <p>
                Os botões agora não exporta o Mockup e sim o seu Custom<br>
                Pq nesse ponto vc ajusto o JSON para levar la pro back e servir de modelo de "como o retorno deve ser"<br>
                Ele ta bem 'limpo', tem uma descrição em alto nivel e marca o loop
              </p>
              <p>
                Esse JSON vai ser uma 'mão na roda', pra fazer o end-point!!!
              </p>
              <p>
                Mas e as customização??? Segue a mesma logica<br>
                Vou mostrar de uma forma bem simples e devagar<br>
                Depois vou acelerar e mostrar um custom q usa de forma mais POWER
              </p>


            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-separator />

        <q-expansion-item
        group="somegroup"
          icon="science"
          label="LABS3 - Customizar, explicado de forma bem simples"
          header-class="text-primary"
        >
          <q-card>
            <q-card-section>
              <p><q-btn label="labs3" to="/labs3" color="primary"></q-btn></p>
<p>Vamos dizer que tenho q usar esse componente, da mesma forma que usei anteriormente,<br>
com um POREM, esse cliente quer mudar a cor do icone!, do resto é igual<br>
o tal icone vai ser o do t='S', o $ do saldo q esta em azul<br>
o cliente quer em laranja!


</p>

<p>Abre novamente o arquivo de mockup do Componente<br>
La no fim vc vai encontra dentro de setup.itemTemplate.S exatamente como foi definido a cor azul<br>
Esse tipo de coisa simples, so de ler o mockup fica bem obvio quem é o que<br>
</p>

<p>Fiz exatamente a mesma coisa, copiei e colei...<br>
Eu nao mexi no DATA, criei outra variavel pro setup em laranja<br>
da uma olhada no codigo como eu inclui minha nova variavel sem quebrar o q ja tinha!<br>
</p>

<p>Se vc exportar o CUSTOM, ja vai ta lah o setup do laranja<br>
mas vc ate poderia trazer isso fora da chamada dos dados, qdo o cliente logar por exemplo<br>
</p>

<p>Ate agora eu nao falei nada sobre o DESCRIPTOR<br>
E esse JSON ta la na primeira pagina junto com o MOCKUP do Componente<br>
Abre ele! e o mockup tbem, Vc consegue entender o PQ da definição do componente???<br>
O DESCRIPTOR é bem reduzido e nele tem coisas como nome de componente do Quasar...<br>
E SIM!, quer dizer exatamente isso ali é um componente do Quasar e tudo q vc encontra na documentação online ta valendo!
</p>

<p>Com isso em mente, vamos para uma verssão um pouquinho mais avançada...</p>

            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-separator />

        <q-expansion-item
        group="somegroup"
          icon="science"
          label="LABS4 - Descritores, faça do seu jeito!"
          header-class="text-primary"
        >
          <q-card >
            <q-card-section>


              <p><q-btn label="labs4" to="/labs4" color="primary"></q-btn></p>

              <p>Olhando pra essa pagina, se saiu tudo de acordo...<br>
                espero q vc esteja pensando algo como 'O LOKOOOO' hahahaha<br>
O que eu fiz e como eu fiz, esta ai pra vc investigar...<br>
</p>

<p>O que vc encontra no Descritor, é de fato bem generico<br>
Pq ate certo ponto, o que vc pode colocar no seu JSON é bem generico<br>
Se o Descritor, disse "Isso é uma classe de css", pode criar a sua propria classe e usar o nome dela no seu JSON sim!<br>
Se o Descritor, disse "Isso é um componente Quasar", mesmo que uma propriedade nao esteja mencionada no mockup, vc pode sim usar<br>
Os eventos, a chave emit, segue a mesma pegada, vc pode criar novos ou ate modificar os que ja existem...<br>
E vc pode sim criar novas chaves, novos templates, e reinventar o mockup
</p>

<p>Vou então agora explicar melhor qual o PONTO disso<br>
</p>

<p>Eu disse que era um modelo da aplicação pratica de:<br>
  Desestruturação de Objetos<br>
Esse conceito eu julgo ser algo "medio", na dificuldade de entender e utilizar em uma aplicação real<br>
</p>

<p>Isso NÃO É UM PAVÃO!, olha o q eu sei fazer...<br>
essa é minha solução pra um problema de um JOB, que é o seguinte<br>
É uma forma de transferir o conhecimento medio ou avançado de um DEV fora da casa, para um DEV junior da casa<br>
Sim é um codigo para outro DEV e não pro cliente final da casa<br>
Ele é bem amplo e permite uma variedade interesante sem amarras com o DEV original<br>
Usando o que foi exposto no DESCRIPTOR junto com o exemplo de MOCKUP, nao é algo que vai exigir muito ao criar customizações<br>
</p>

<p>Quando a questão esta em algo muito reutilhazado... como o QTable no dashboard da Slice<br>
Velocidade, Padrão, Documentação, Manutenção ... vão com certeza melhorar bastante<br>
</p>

<p>Mesmo sendo um componente de front-end, ele é muito full-stack<br>
A definição em JSON, permite ela acontecer tanto no FRONT ou no BACK<br>
</p>

<p>Eu também não inventei isso!<br>
De modo simples é dessa forma que as coisas se comportam dentro do VUE e dos framework como o QUASAR<br>
Para provar essa afirmação, de uma boa olhada nos arquivos da pasta router, que vc vai encontrar algo muito perto da minha relação entre componente e mockup<br>
</p>

<p>Ja a base da arquitetura da brincadeira toda, essa também não é minha! hahahaha CHARLATÃO HEIN<br>
O que vc esta vendo é o Exercicio que o Francisco passou qdo entrei na SLICE<br>
A logica é a mesma do Francisco, mas o ponto de vista é do Eduardo<br>
E meu ponto de vista peculiar não é novidade pra vc, não é mesmo! hehehehe
</p>

<p>Eu estou bem satisfeito com o resultado final, pq eu consegui melhora muito em um ponto q sempre me incomodou<br>
Que eu consesigo implementar codigo em codigo de terceiro não é novidade...<br>
Mas a implementação nunca foi la muito viavel... Pensa por exemplo nos filtros estilo excel<br>
Implementar ele é muitoooo sofrido<br>
Ja esse é de boa, bem facil mesmo pode testar! hehehehe
</p>



            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-separator />

<q-expansion-item
group="somegroup"
          icon="science"
          label="LABS5 - Afinidade em Ser Compativel"
          header-class="text-primary"
>
  <q-card >
    <q-card-section>


      <p><q-btn label="labs5" to="/labs5" color="primary"></q-btn></p>

      <p>Nesse ultimo LABS quero trazer um cenario onde ja exista esse tipo de componente implementado<br>
        Digamos que surja a necessidade de algo diferente, como um filtro...<br>
Um novo componente com um layout não associado, e que tenha interação com a questao toda<br>
Vou criar um Botão aqui, acima do componente, que remove o primeiro elemento
</p>
<p>E vou fazer isso usando algo um pouco mais avaçado, o tal SLOT</p>
<p>E mais ainda, estou indo alem do que o Descritor disse que estava valendo</p>
<p>Da uma olhada no codigo disso! Pq vou carregar um componente de forma dinamica e definir que componente é esse lah no JSON</p>



    </q-card-section>
  </q-card>
</q-expansion-item>



      </q-list>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    forma(v){
      return
    }

  },
  name: "LearnApp",
  setup() {
    return {};
  },
};
</script>

<style>
.myc {
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: #f7f7f9;
}
</style>
