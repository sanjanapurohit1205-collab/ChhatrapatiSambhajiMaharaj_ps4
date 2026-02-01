import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { CheckCircle, AlertTriangle, XCircle, ChevronLeft } from 'lucide-react';

const Report = () => {
    const { id } = useParams();
    const { user } = useAuth();

    const userReportsKey = `interviewiq_reports_${user?.email}`;
    const reports = JSON.parse(localStorage.getItem(userReportsKey) || '[]');
    const report = reports.find(r => r.id.toString() === id);

    if (!report) return <div className="p-8">Report not found.</div>;

    const getScoreColor = (score) => {
        if (score >= 8) return 'var(--color-success)';
        if (score >= 5) return 'var(--color-warning)';
        return 'var(--color-danger)';
    };

    const getReadiness = (score) => {
        if (score >= 8) return { label: 'Interview Ready', color: 'var(--color-success)' };
        if (score >= 5) return { label: 'Almost Ready', color: 'var(--color-warning)' };
        return { label: 'Beginner', color: 'var(--color-danger)' };
    };

    const readiness = getReadiness(report.score);

    return (
        <div className="animate-fade-in container" style={{ maxWidth: '1000px', padding: '2rem 0' }}>

            <Link to="/dashboard" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                <ChevronLeft size={20} /> Back to Dashboard
            </Link>

            <div className="card" style={{ marginBottom: '2rem', textAlign: 'center', padding: '3rem' }}>
                <h1 style={{ marginBottom: '1rem' }}>Interview Report</h1>
                <div style={{ fontSize: '4rem', fontWeight: '800', color: getScoreColor(report.score * 10) }}>
                    {report.score}/10
                </div>
                <p style={{ fontSize: '1.25rem', color: readiness.color, fontWeight: '600' }}>{readiness.label}</p>
                <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
                    {report.config.domain} - {report.config.difficulty}
                </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {report.results.map((item, index) => (
                    <div key={index} className="card">
                        <h3 style={{ marginBottom: '1rem', fontWeight: '600' }}>Q{index + 1}: {item.questionText}</h3>

                        <div style={{ backgroundColor: '#f8fafc', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', borderLeft: '4px solid var(--color-primary)' }}>
                            <strong>Your Answer:</strong>
                            <p style={{ marginTop: '0.5rem', color: 'var(--color-text-main)' }}>{item.userAnswer}</p>
                        </div>

                        {/* Criteria Scores */}
                        <div className="grid-2" style={{ GRIDTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', marginBottom: '1.5rem', gap: '1rem' }}>
                            {Object.entries(item.evaluation.scores).map(([key, val]) => (
                                <div key={key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem', borderBottom: '1px solid var(--color-border)' }}>
                                    <span style={{ textTransform: 'capitalize', color: 'var(--color-text-muted)' }}>{key}</span>
                                    <span style={{ fontWeight: 'bold', color: val >= 7 ? 'var(--color-success)' : 'var(--color-text-main)' }}>{val}/10</span>
                                </div>
                            ))}
                        </div>

                        <div style={{ marginBottom: '1rem' }}>
                            <h4 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Feedback</h4>
                            <p>{item.evaluation.feedback}</p>
                        </div>

                        <div className="grid-2" style={{ gap: '2rem' }}>
                            <div>
                                <h4 style={{ fontWeight: '600', color: 'var(--color-success)', marginBottom: '0.5rem' }}>Strengths</h4>
                                <ul style={{ paddingLeft: '1.5rem' }}>
                                    {item.evaluation.strengths.map((s, i) => <li key={i}>{s}</li>)}
                                </ul>
                            </div>
                            <div>
                                <h4 style={{ fontWeight: '600', color: 'var(--color-danger)', marginBottom: '0.5rem' }}>Improvements</h4>
                                <ul style={{ paddingLeft: '1.5rem' }}>
                                    {item.evaluation.improvement.map((s, i) => <li key={i}>{s}</li>)}
                                </ul>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
};

export default Report;