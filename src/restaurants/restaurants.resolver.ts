import { Query, Resolver } from '@nestjs/graphql'


@Resolver()
export class RestaurantsResolver {

    @Query(returns => Boolean) // graphQL을 위한 return
    isPizzaGood(): Boolean { // typescript를 위한 return
        return true;
    }
}