'use strict';

describe('Service: Airvantage', function () {

  // load the service's module
  beforeEach(module('ecloApp'));

  // instantiate service
  var Airvantage;
  beforeEach(inject(function (_Airvantage_) {
    Airvantage = _Airvantage_;
  }));

  it('should do something', function () {
    expect(!!Airvantage).toBe(true);
  });

});
