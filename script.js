class Converter {
    constructor(value, unit) {
      this.value = value;
      this.unit = unit;
    }
    
    convertTo(targetUnit) {
      let result;
  
      // Conversione tra unità di misura
      if (this.unit === 'cm' && targetUnit === 'inch') {
        result = this.value * 0.393701;
      } else if (this.unit === 'inch' && targetUnit === 'cm') {
        result = this.value * 2.54;
      } else if (this.unit === 'kg' && targetUnit === 'lb') {
        result = this.value * 2.20462;
    } else if (this.unit === 'kg' && targetUnit === 'hg') {
        result = this.value * 10;
      } else if (this.unit === 'kg' && targetUnit === 'g') {
        result = this.value * 1000;
      } else if (this.unit === 'g' && targetUnit === 'hg') {
        result = this.value * 0.01;
      } else if (this.unit === 'g' && targetUnit === 'kg') {
        result = this.value * 0.001;
      } else if (this.unit === 'hg' && targetUnit === 'g') {
        result = this.value * 100;
      } else if (this.unit === 'hg' && targetUnit === 'kg') {
        result = this.value * 0.1;
      }
     else if (this.unit === 'm' && targetUnit === 'dm') {
        result = this.value * 10;
      }  else if (this.unit === 'm' && targetUnit === 'cm') {
        result = this.value * 100;
      }  else if (this.unit === 'm' && targetUnit === 'mm') {
        result = this.value * 1000;
      } else if (this.unit === 'mm' && targetUnit === 'cm') {
        result = this.value * 0.1;
      } else if (this.unit === 'mm' && targetUnit === 'dm') {
        result = this.value * 0.01;
      } else if (this.unit === 'mm' && targetUnit === 'm') {
        result = this.value * 0.001;
      }else if (this.unit === 'cm' && targetUnit === 'mm') {
        result = this.value * 10;
      } else if (this.unit === 'cm' && targetUnit === 'dm') {
        result = this.value * 0.1;
      } else if (this.unit === 'cm' && targetUnit === 'm') {
        result = this.value * 0.01;
      } else if (this.unit === 'dm' && targetUnit === 'mm') {
        result = this.value * 100;
      } else if (this.unit === 'dm' && targetUnit === 'cm') {
        result = this.value * 10;
      } else if (this.unit === 'dm' && targetUnit === 'm') {
        result = this.value * 0.1;
      } else if (this.unit === 'usd' && targetUnit === 'eur') {
        
        const exchangeRate = 0.89;
        result = this.value * exchangeRate;
      }
      else if (this.unit === 'usd' && targetUnit === 'yen') {
        
        const exchangeRate = 140.46;
        result = this.value * exchangeRate;
      }
      else if (this.unit === 'usd' && targetUnit === 'rupia') {
        
        const exchangeRate = 82.65;
        result = this.value * exchangeRate;
      }
      else if (this.unit === 'usd' && targetUnit === 'sterlina') {
        
        const exchangeRate = 0.81;
        result = this.value * exchangeRate;
      }
      else if (this.unit === 'usd' && targetUnit === 'peso') {
        
        const exchangeRate = 56.13;
        result = this.value * exchangeRate;
      }
      
      else if (this.unit === 'eur' && targetUnit === 'usd') {
        
        const exchangeRate = 1.07;
        result = this.value * exchangeRate;
      }
      else if (this.unit === 'eur' && targetUnit === 'yen') {
        
        const exchangeRate = 150.71;
        result = this.value * exchangeRate;
      }
      else if (this.unit === 'eur' && targetUnit === 'rupia') {
        
        const exchangeRate = 88.64;
        result = this.value * exchangeRate;
      }
      else if (this.unit === 'eur' && targetUnit === 'sterlina') {
        
        const exchangeRate = 0.87;
        result = this.value * exchangeRate;
      }
      else if (this.unit === 'eur' && targetUnit === 'peso') {
        
        const exchangeRate = 60.18;
        result = this.value * exchangeRate;
      }
      else if (this.unit === 'sterlina' && targetUnit === 'usd') {
        
        const exchangeRate = 1.23;
        result = this.value * exchangeRate;
      }
      else if (this.unit === 'sterlina' && targetUnit === 'eur') {
        
        const exchangeRate = 1.15;
        result = this.value * exchangeRate;
      }
      else if (this.unit === 'sterlina' && targetUnit === 'yen') {
        
        const exchangeRate = 173.38;
        result = this.value * exchangeRate;
      }
      else if (this.unit === 'sterlina' && targetUnit === 'rupia') {
        
        const exchangeRate = 101.97;
        result = this.value * exchangeRate;
      }
      else if (this.unit === 'sterlina' && targetUnit === 'peso') {
        
        const exchangeRate = 69.25;
        result = this.value * exchangeRate;
      }
      else if (this.unit === 'yen' && targetUnit === 'usd') {
        
        const exchangeRate = 0.0071;
        result = this.value * exchangeRate;
      }
      else if (this.unit === 'yen' && targetUnit === 'eur') {
        
        const exchangeRate = 0.0066;
        result = this.value * exchangeRate;
      }
      else if (this.unit === 'yen' && targetUnit === 'sterlina') {
        
        const exchangeRate = 0.0058;
        result = this.value * exchangeRate;
      }
      else if (this.unit === 'yen' && targetUnit === 'rupia') {
        
        const exchangeRate = 0.59;
        result = this.value * exchangeRate;
      }
      else if (this.unit === 'yen' && targetUnit === 'peso') {
        
        const exchangeRate = 0.40;
        result = this.value * exchangeRate;
      }
      else if (this.unit === 'rupia' && targetUnit === 'usd') {
        
        const exchangeRate = 0.012;
        result = this.value * exchangeRate;
      }
      else if (this.unit === 'rupia' && targetUnit === 'eur') {
        
        const exchangeRate = 0.011;
        result = this.value * exchangeRate;
      }
      else if (this.unit === 'rupia' && targetUnit === 'sterlina') {
        
        const exchangeRate = 0.0098;
        result = this.value * exchangeRate;
      }
      else if (this.unit === 'rupia' && targetUnit === 'yen') {
        
        const exchangeRate = 1.70;
        result = this.value * exchangeRate;
      }
      else if (this.unit === 'rupia' && targetUnit === 'peso') {
        
        const exchangeRate = 0.68;
        result = this.value * exchangeRate;
      }
      else if (this.unit === 'peso' && targetUnit === 'usd') {
        
        const exchangeRate = 0.057;
        result = this.value * exchangeRate;
      }
      else if (this.unit === 'peso' && targetUnit === 'eur') {
        
        const exchangeRate = 0.017;
        result = this.value * exchangeRate;
      }
      else if (this.unit === 'peso' && targetUnit === 'sterlina') {
        
        const exchangeRate = 0.014;
        result = this.value * exchangeRate;
      }
      else if (this.unit === 'peso' && targetUnit === 'yen') {
        
        const exchangeRate = 2.50;
        result = this.value * exchangeRate;
      }
      else if (this.unit === 'peso' && targetUnit === 'rupia') {
        
        const exchangeRate = 1.47;
        result = this.value * exchangeRate;
      }
      
      else {
        console.log('Conversione non supportata');
        return;
      }
  
      const resultElement = document.getElementById('result');
      resultElement.textContent = `${this.value} ${this.unit} corrisponde a ${result.toFixed(3)} ${targetUnit}`;
    }
    }
  
  function convert() {
    const valueInput = document.getElementById('value-input');
    const unitSelect = document.getElementById('unit-select');
    const targetUnitSelect = document.getElementById('target-unit-select');
  
    const value = parseFloat(valueInput.value);
    const unit = unitSelect.value;
    const targetUnit = targetUnitSelect.value;
  
    const converter = new Converter(value, unit);
    converter.convertTo(targetUnit);
  }
  