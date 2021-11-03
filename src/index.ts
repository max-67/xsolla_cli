import {Command, flags} from '@oclif/command'

class Xsolla extends Command {
  static description = 'describe the command here'

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    age: flags.integer({char: 'a'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(Xsolla)
    console.log(flags);
    const name = flags.name ?? 'world'
    const age = flags.age ?? 'undefined'
    this.log(`hello ${name} from ./src/index.ts and me ${age} years old`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
// export class GoodbyeCommand extends Command {
//   async run() {
//     console.log('goodbye, world!')
//   }
// }

export = Xsolla
