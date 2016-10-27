namespace ajax.Services {
    export class TaxService {
        CalculateTax(price) { return price * .08; }
    }

    angular.module(`ajax`).service(`TaxService`, TaxService);
}
