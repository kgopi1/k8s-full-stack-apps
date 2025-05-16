FROM python:3.10-slim

WORKDIR /app
COPY ./src .
RUN pip install -r requirements.txt
ENV MONGODBHOST='127.0.0.1'
ENV MONGODBUSER=USER
ENV MONGODBPASS=pass
RUN pip install --no-cache-dir -r requirements.txt
CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]
LABEL repo=k8s-full-stack-apps
