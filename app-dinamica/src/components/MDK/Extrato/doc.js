const mockup = {
  data: {
    entry: [
      {
        heading: true,
        body: "Extrato Carteira Z"
      },
      {
        title: "01/03/2023",
        subtitle: "SALDO: R$400,00",

        body: {
          type: "componente",
          val: "item-extrato",
          data: {
            itens: [{
              txt1: "R$ 350,00",
              txt2: "Saldo Anterior",
              t: "A",

            },
            {
              txt1: "R$ 100,00",
              txt2: "Credito da Carteira X",
              emit: { event: "itemclick", p: "para1" },
              t: "C",
            },
            {
              txt1: "R$ 50,00",
              txt2: "Debito para Carteira Y",
              t: "D",
            },
            {
              txt1: "R$ 400,00",
              txt2: "Saldo",
              t: "S",
              sep: true
            }

            ]
          }

        }
      },
      {
        title: "01/02/2023",
        subtitle: "SALDO: R$350,00",
        body: {
          type: "componente",
          val: "item-extrato",
          data: {
            itens: [{
              txt1: "R$ 30,00",
              txt2: "Saldo Anterior",
              t: "A",
            },
            {
              txt1: "R$ 400,00",
              txt2: "Credito da Carteira X",
              emit: { event: "itemclick", p: "para1" },
              t: "C",
            },
            {
              txt1: "R$ 50,00",
              txt2: "Debito para Carteira Y",
              t: "D",
            },
            {
              txt1: "R$ 30,00",
              txt2: "Debito para Carteira Y",
              t: "D",
            },
            {
              txt1: "R$ 350,00",
              txt2: "Saldo",
              t: "S",
              sep: true
            }

            ]
          }

        }
      },
      {
        title: "01/01/2023",
        subtitle: "SALDO: R$30,00",
        body: {
          type: "componente",
          val: "item-extrato",
          data: {
            itens: [{
              txt1: "R$ 0,00",
              txt2: "Saldo Anterior",
              t: "A",

            },
            {
              txt1: "R$ 30,00",
              txt2: "Credito da Carteira X",
              emit: { event: "itemclick", p: "para1" },
              t: "C",
            },
            {
              txt1: "R$ 30,00",
              txt2: "Saldo",
              t: "S",
              sep: true
            }

            ]
          }

        }
      }
    ]
  },
  setup: {

    layout: {
      color: "secondary",
      style: "width: 80%;"
    },


    itemTemplate:{
    A: {
      txt1_class: "text-grey-8 timeline_entry_list_valor timeline_entry_list_total",
      avatar_class: "timeline_entry_list_icon",
      icon: { name: "pending", color: "grey-8" },
      txt2_class: ""
    },
    C: {
      txt1_class: "text-positive timeline_entry_list_valor timeline_entry_list_total",
      avatar_class: "timeline_entry_list_icon",
      icon: { name: "add_circle", color: "positive" },
      txt2_class: ""
    },
    D: {
      txt1_class: "text-negative timeline_entry_list_valor timeline_entry_list_total",
      avatar_class: "timeline_entry_list_icon",
      icon: { name: "remove_circle", color: "negative" },
      txt2_class: ""
    },
    S: {
      txt1_class: "text-primary timeline_entry_list_valor timeline_entry_list_total",
      avatar_class: "timeline_entry_list_icon",
      icon: { name: "monetization_on", color: "primary" },
      txt2_class: ""
    },
  }
  }
}


export { mockup }
