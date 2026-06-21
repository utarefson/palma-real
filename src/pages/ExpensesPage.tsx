import { useTranslation } from 'react-i18next';
import { PagePlaceholder } from '../components/PagePlaceholder';
//import { ExpensesFeeCalculator } from '../components/ExpensesFeeCalculator';

export function ExpensesPage() {
  const { t } = useTranslation();

  return (
    <PagePlaceholder
      title={t('pages.expenses')}
      description={t('navbar.expenses')}
    />
    // <div>
    //   <ExpensesFeeCalculator />
    // </div>
  );
}