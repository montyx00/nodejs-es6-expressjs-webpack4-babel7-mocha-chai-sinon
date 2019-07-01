let AlgorithmModel = {
    all: [
        {
            id: 'algorithm01',
            name: 'Algorithm 1',
            description: 'Very good algorithm',
            minCount: 500,
            maxCount: 700,
            minPrice: 30000,
            maxPrice: 40000
        },
        {
            id: 'algorithm02',
            name: 'Algorithm 2',
            description: 'Optimistic algorithm',
            minCount: 400,
            maxCount: 600,
            minPrice: 25000,
            maxPrice: 30000
        },
        {
            id: 'algorithm03',
            name: 'Algorithm 2',
            description: 'Pessimistic algorithm',
            minCount: 300,
            maxCount: 500,
            minPrice: 20000,
            maxPrice: 25000
        }
    ],
    recommendations: {
        BUY: 'buy',
        HOLD: 'hold',
        SELL: 'sell'
    },
    min: 30,
    max: 110,
    recommendationAlgorithm: function (count, price, algorithm) {
        if(count < algorithm.minCount || price > algorithm.maxPrice) {
            return this.recommendations.SELL
        }
        else if(count > algorithm.maxCount || price < algorithm.minPrice) {
            return this.recommendations.BUY
        }
        return this.recommendations.HOLD
    }
}

export default AlgorithmModel