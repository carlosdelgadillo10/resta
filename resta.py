from fastapi import FastAPI
from pydantic import BaseModel

#Instancia
app = FastAPI()

class Operacion(BaseModel):
    num1: float
    num2: float

@app.post("/restar")
def restar(op: Operacion):
    return op.num1 - op.num2