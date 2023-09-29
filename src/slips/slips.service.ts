import { Injectable } from '@nestjs/common';
import { SlipInterface } from './entity';
const data = [
  {
    id: 1,
    client: 'aaaa',
    email: 'bbbb',
    dueDate: '2023-09-30',
    value: '230.37',
  },
  {
    id: 2,
    client: 'aaaa',
    email: 'bbbb',
    dueDate: '2023-09-30',
    value: '230.37',
  },
  {
    id: 3,
    client: 'aaaa',
    email: 'bbbb',
    dueDate: '2023-09-30',
    value: '230.37',
  },
  {
    id: 4,
    client: 'aaaa',
    email: 'bbbb',
    dueDate: '2023-09-30',
    value: '230.37',
  },
  {
    id: 5,
    client: 'aaaa',
    email: 'bbbb',
    dueDate: '2023-09-30',
    value: '230.37',
  },
  {
    id: 6,
    client: 'aaaa',
    email: 'bbbb',
    dueDate: '2023-09-30',
    value: '230.37',
  },
  {
    id: 7,
    client: 'aaaa',
    email: 'bbbb',
    dueDate: '2023-09-30',
    value: '230.37',
  },
  {
    id: 8,
    client: 'aaaa',
    email: 'bbbb',
    dueDate: '2023-09-30',
    value: '230.37',
  },
];

@Injectable()
export class SlipsService {
  // recebe um csv e processa e salvando no banco de dados
  async readCSV(data) {
    const items = data;

    for (const item of items) {
      const bankSlip = await this.callBankSlipGenerate(item);

      if (bankSlip.status == 'OK') {
        try {
          await this.SendEmail(bankSlip);

          await this.SaveData(bankSlip);
        } catch (error) {
          return error;
        }
      }
    }
  }

  // faz a chamada no banco para geração do boleto recebendo os codigo de barras do boleto
  async callBankSlipGenerate(item: SlipInterface) {
    try {
      console.log(item, 'CHAMADA na API Do Banco');
      const digitalLine = '1234567890';
      item.status = 'ok';
      item.digitalLine = digitalLine;

      return item;
    } catch (error) {
      console.log(error);
      return { status: 'nok' };
    }
  }

  // faz o disparo do email para o cliente com o boleto
  async SendEmail(item) {
    console.log(item);

    try {
      return 'Email Enviado com Sucesso';
    } catch (error) {
      return 'Email não enviado';
    }
  }

  async SaveData(item) {
    console.log(item);

    try {
      return 'Item Salvo no Banco de Dados';
    } catch (error) {
      return 'Item Não Salvo no banco de dados';
    }
  }
}
