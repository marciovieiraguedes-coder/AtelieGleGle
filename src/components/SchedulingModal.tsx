import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar as CalendarIcon, Clock, CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react";

interface SchedulingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SchedulingModal = ({ isOpen, onClose }: SchedulingModalProps) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "Aniversário Infantil",
    guests: "",
    details: "",
  });

  const timeSlots = ["09:00", "10:30", "13:00", "14:30", "16:00", "17:30"];

  // Generate calendar days for current month mock
  const today = new Date();
  const currentMonthName = today.toLocaleString('pt-BR', { month: 'long' });
  const currentYear = today.getFullYear();
  const daysInMonth = new Date(currentYear, today.getMonth() + 1, 0).getDate();
  const startDayOfWeek = new Date(currentYear, today.getMonth(), 1).getDay(); // 0 = Sunday
  
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: startDayOfWeek }, (_, i) => i);

  const handleNextStep = () => {
    if (step === 1 && selectedDate && selectedTime) {
      setStep(2);
    } else if (step === 2) {
      // Form validation could go here
      setStep(3);
    }
  };

  const handleReset = () => {
    setStep(1);
    setSelectedDate(null);
    setSelectedTime(null);
    setFormData({ name: "", email: "", phone: "", eventType: "Aniversário Infantil", guests: "", details: "" });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-luxury-graphite/80 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-luxury-bg shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="bg-luxury-sand/40 border-b border-luxury-gold/20 p-6 flex items-center justify-between">
              <div>
                <h3 className="font-display text-3xl font-bold text-luxury-graphite tracking-tight">
                  Agendar Evento
                </h3>
                <p className="text-luxury-graphite/70 text-sm mt-1">
                  Ateliê Gleglê • Reserve sua data conosco
                </p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/50 rounded-full transition-colors text-luxury-graphite"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10">
              
              {/* Progress Indicator */}
              {step < 3 && (
                <div className="flex items-center justify-center mb-10">
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold ${step >= 1 ? 'bg-luxury-gold text-white' : 'bg-luxury-sand text-luxury-graphite/50'}`}>1</div>
                  <div className={`h-1 w-16 mx-2 ${step >= 2 ? 'bg-luxury-gold' : 'bg-luxury-sand'}`} />
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold ${step >= 2 ? 'bg-luxury-gold text-white' : 'bg-luxury-sand text-luxury-graphite/50'}`}>2</div>
                </div>
              )}

              {/* Step 1: Calendar & Time */}
              {step === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Calendar Side */}
                  <div>
                    <h4 className="flex items-center gap-2 font-bold text-lg mb-6 text-luxury-graphite">
                      <CalendarIcon className="w-5 h-5 text-luxury-gold" />
                      Selecione a Data
                    </h4>
                    
                    <div className="bg-white p-6 shadow-sm border border-luxury-sand rounded-sm">
                      <div className="flex items-center justify-between mb-6">
                        <button className="p-1 hover:bg-luxury-sand rounded"><ChevronLeft className="w-5 h-5 text-luxury-graphite" /></button>
                        <span className="font-bold text-luxury-graphite capitalize">
                          {currentMonthName} {currentYear}
                        </span>
                        <button className="p-1 hover:bg-luxury-sand rounded"><ChevronRight className="w-5 h-5 text-luxury-graphite" /></button>
                      </div>

                      <div className="grid grid-cols-7 gap-2 mb-2 text-center text-xs font-bold text-luxury-graphite/50">
                        {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((d, i) => <div key={i}>{d}</div>)}
                      </div>
                      <div className="grid grid-cols-7 gap-2 text-center">
                        {emptyDays.map((_, i) => (
                          <div key={`empty-${i}`} className="p-2" />
                        ))}
                        {days.map((day) => {
                          const isSelected = selectedDate === day;
                          // Disable past days for realism (just simulating random availability here, say days < 10 are past)
                          const isPast = day < new Date().getDate(); 
                          return (
                            <button
                              key={day}
                              disabled={isPast}
                              onClick={() => setSelectedDate(day)}
                              className={`p-2 w-10 h-10 mx-auto flex items-center justify-center rounded-full text-sm font-medium transition-colors
                                ${isSelected ? 'bg-luxury-gold text-white shadow-md' : 
                                  isPast ? 'text-luxury-graphite/20 cursor-not-allowed' : 'text-luxury-graphite hover:bg-luxury-sand'}`}
                            >
                              {day}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Time Side */}
                  <div>
                    <h4 className="flex items-center gap-2 font-bold text-lg mb-6 text-luxury-graphite">
                      <Clock className="w-5 h-5 text-luxury-gold" />
                      Horários Disponíveis
                    </h4>
                    
                    {selectedDate ? (
                      <div className="grid grid-cols-2 gap-3">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`p-4 text-center border font-medium transition-all
                              ${selectedTime === time 
                                ? 'border-luxury-gold bg-luxury-gold/5 text-luxury-gold shadow-sm' 
                                : 'border-luxury-sand text-luxury-graphite hover:border-luxury-gold/50'}`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="h-full flex items-center justify-center text-luxury-graphite/40 border-2 border-dashed border-luxury-sand p-6 text-center">
                        Selecione uma data no calendário para ver os horários.
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Step 2: Form Details */}
              {step === 2 && (
                <div className="max-w-2xl mx-auto">
                  <div className="bg-luxury-gold/10 p-4 mb-8 flex items-center gap-4 text-luxury-graphite">
                    <CalendarIcon className="w-6 h-6 text-luxury-gold" />
                    <div>
                      <p className="text-sm font-bold opacity-70">Data e Hora Selecionadas</p>
                      <p className="font-medium">{selectedDate} de {currentMonthName} às {selectedTime}</p>
                    </div>
                    <button onClick={() => setStep(1)} className="ml-auto text-sm text-luxury-gold font-bold underline">Alterar</button>
                  </div>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-luxury-graphite uppercase tracking-wider">Nome Completo</label>
                        <input 
                          type="text" 
                          className="w-full bg-white border border-luxury-sand p-3 outline-none focus:border-luxury-gold transition-colors"
                          placeholder="Seu nome"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-luxury-graphite uppercase tracking-wider">Telefone / WhatsApp</label>
                        <input 
                          type="tel" 
                          className="w-full bg-white border border-luxury-sand p-3 outline-none focus:border-luxury-gold transition-colors"
                          placeholder="(92) 99999-9999"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-luxury-graphite uppercase tracking-wider">Tipo de Evento</label>
                        <select 
                          className="w-full bg-white border border-luxury-sand p-3 outline-none focus:border-luxury-gold transition-colors"
                          value={formData.eventType}
                          onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                        >
                          <option>Aniversário Infantil</option>
                          <option>Aniversário Adulto</option>
                          <option>Casamento / Noivado</option>
                          <option>Chá Revelação</option>
                          <option>Corporativo</option>
                          <option>Outro</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-luxury-graphite uppercase tracking-wider">Qtd. Convidados (Aprox.)</label>
                        <input 
                          type="number" 
                          className="w-full bg-white border border-luxury-sand p-3 outline-none focus:border-luxury-gold transition-colors"
                          placeholder="Ex: 50"
                          value={formData.guests}
                          onChange={(e) => setFormData({...formData, guests: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-luxury-graphite uppercase tracking-wider">Tema ou Ideias Iniciais</label>
                      <textarea 
                        rows={4}
                        className="w-full bg-white border border-luxury-sand p-3 outline-none focus:border-luxury-gold transition-colors resize-none"
                        placeholder="Conte-nos um pouco sobre o que você imagina para a decoração..."
                        value={formData.details}
                        onChange={(e) => setFormData({...formData, details: e.target.value})}
                      />
                    </div>
                  </form>
                </div>
              )}

              {/* Step 3: Success Confirmation */}
              {step === 3 && (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 15 }}
                  >
                    <CheckCircle2 className="w-24 h-24 text-luxury-gold mb-6" />
                  </motion.div>
                  <h3 className="font-display text-4xl font-bold text-luxury-graphite mb-4">
                    Agendamento Solicitado!
                  </h3>
                  <p className="text-luxury-graphite/80 text-lg max-w-lg mb-8">
                    Sua solicitação de pré-agendamento para <strong>{selectedDate} de {currentMonthName} às {selectedTime}</strong> foi recebida.
                    Enviamos uma confirmação automática para o seu contato, e nossa equipe entrará em contato em breve para finalizar os detalhes do projeto!
                  </p>
                  <button 
                    onClick={handleReset}
                    className="shine-button bg-luxury-graphite text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-luxury-gold transition-all"
                  >
                    Voltar ao Início
                  </button>
                </div>
              )}
            </div>

            {/* Footer Actions (Only for Step 1 & 2) */}
            {step < 3 && (
              <div className="bg-white border-t border-luxury-sand p-6 flex justify-between items-center">
                {step === 2 ? (
                  <button 
                    onClick={() => setStep(1)}
                    className="px-6 py-3 text-sm font-bold text-luxury-graphite uppercase tracking-wider hover:text-luxury-gold transition-colors"
                  >
                    Voltar
                  </button>
                ) : (
                  <div /> // Empty div for flex spacing
                )}
                
                <button 
                  onClick={handleNextStep}
                  disabled={step === 1 && (!selectedDate || !selectedTime)}
                  className={`shine-button px-8 py-4 text-xs font-bold tracking-widest uppercase transition-all
                    ${(step === 1 && (!selectedDate || !selectedTime)) 
                      ? 'bg-luxury-sand text-luxury-graphite/50 cursor-not-allowed' 
                      : 'bg-luxury-gold text-white hover:bg-luxury-graphite'}`}
                >
                  {step === 1 ? 'Continuar para Detalhes' : 'Confirmar Agendamento'}
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
