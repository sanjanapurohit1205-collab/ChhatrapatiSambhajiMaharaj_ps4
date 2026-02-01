import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ChevronLeft, FileText, Calendar } from 'lucide-react';

const ReportHistory = () => {
    const { user } = useAuth();
    const userReportsKey = `interviewiq_reports_${user?.email}`;
    const reports = JSON.parse(localStorage.getItem(userReportsKey) || '[]');

    // Sort by date desc
    reports.sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <div className="animate-fade-in container" style={{ maxWidth: '800px', padding: '2rem 0' }}>

            <Link to="/dashboard" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                <ChevronLeft size={20} /> Back to Dashboard
            </Link>

            <h1 style={{ marginBottom: '2rem' }}>Past Interview Reports</h1>

            {reports.length === 0 ? (
                <div className="card text-center" style={{ padding: '3rem' }}>
                    <p>No reports found. Start your first interview!</p>
                    <Link to="/interview/setup" className="btn btn-primary mt-4">Start New Interview</Link>
                </div>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {reports.map((report) => (
                        <div key={report.id} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{report.config.domain} ({report.config.difficulty})</h3>
                                <div style={{ display: 'flex', gap: '1rem', color: 'var(--color-text-muted)', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                                        <Calendar size={14} /> {new Date(report.date).toLocaleDateString()}
                                    </span>
                                    <span>
                                        {report.results.length} Questions
                                    </span>
                                </div>
                            </div>

                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>
                                    {report.score}/10
                                </div>
                                <Link to={`/report/${report.id}`} style={{ fontSize: '0.875rem', color: 'var(--color-primary)', fontWeight: '500' }}>
                                    View Details &rarr;
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ReportHistory;