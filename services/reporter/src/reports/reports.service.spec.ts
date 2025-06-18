import { ReportsService } from './reports.service';
import { fbPrismaMock, ttkPrismaMock } from './__mocks__/prisma.mock';

describe('ReportsService', () => {
  let service: ReportsService;

  beforeEach(() => {
    service = new ReportsService(fbPrismaMock as any, ttkPrismaMock as any);

    jest.clearAllMocks();
  });

  describe('getEventStats()', () => {
    it('should group events by source', async () => {
      fbPrismaMock.facebookEvent.groupBy.mockResolvedValue([
        { eventType: 'like', _count: 10 },
      ]);

      const result = await service.getEventStats({ source: 'facebook' });
      expect(result).toEqual([{ eventType: 'like', _count: 10 }]);
      expect(fbPrismaMock.facebookEvent.groupBy).toHaveBeenCalled();
    });
  });

  describe('getRevenue()', () => {
    it('should sum revenue for Facebook', async () => {
      fbPrismaMock.facebookEvent.findMany.mockResolvedValue([
        { purchaseAmount: '100.5' },
        { purchaseAmount: '50' },
      ]);

      const result = await service.getRevenue({ source: 'facebook' });
      expect(result.totalRevenue).toBe(150.5);
    });
  });

  describe('getDemographics()', () => {
    it('should return Facebook demographics', async () => {
      fbPrismaMock.facebookEvent.groupBy.mockResolvedValueOnce([
        { userGender: 'female', _count: 2 },
      ]);
      fbPrismaMock.facebookEvent.groupBy.mockResolvedValueOnce([
        { userAge: 25, _count: 5 },
      ]);
      fbPrismaMock.facebookEvent.groupBy.mockResolvedValueOnce([
        { userCountry: 'US', _count: 3 },
      ]);
      fbPrismaMock.facebookEvent.groupBy.mockResolvedValueOnce([
        { userCity: 'Kyiv', _count: 1 },
      ]);

      const result = await service.getDemographics({ source: 'facebook' });

      expect(result).toHaveProperty('genderDistribution');
      expect(result.genderDistribution).toEqual([
        { userGender: 'female', _count: 2 },
      ]);
    });
  });
});
