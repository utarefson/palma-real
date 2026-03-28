import { useTranslation } from 'react-i18next';
import { MaintenanceFeeCalculator } from '../components/MaintenanceFeeCalculator';

export function SpecialAssessmentsPage() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('pages.specialAssessments')}</h1>
      <MaintenanceFeeCalculator />
    </div>
  );
}
