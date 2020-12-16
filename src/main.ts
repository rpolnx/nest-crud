import { NestFactory } from '@nestjs/core'
import * as helmet from 'helmet'
import * as morgan from 'morgan'
import { AppModule } from './application/app.module'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    app.use(morgan('short'))
    app.use(helmet())
    const port = process.env.PORT || 3000
    await app.listen(port)
    console.log(`Listen on PORT: ${port}`)
}
bootstrap()
