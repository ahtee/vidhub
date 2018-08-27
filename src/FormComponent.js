import React, { Component } from 'react';
import './App.css';
import { Button, Col, Form, FormGroup, FormText, Label, Input } from 'reactstrap';

var data = {
    uai: "",
    env: "",
    app: "",
    filename: "",
    source: "",
    checksum: "",
    tomcat: {
        java: {
            opt: [
                "-Xms512m", //Default
                "-Xmx512m", //Default
                "-Dfile.encoding=UTF-8", //Default
                "-Djava.security.egd=file:/dev/./urandom", //Default
                "-Dsun.net.inetaddr.ttl=30", //Default
                "-Djava.net.preferIPv4Stack=true", //Default
                "-Djava.net.preferIPv4Addresses=true" //Default
            ]
        },
        server: {
            valves: [
                {
                    className: "org.apache.catalina.valves.AccessLogValve",
                    directory: "/var/log/tomcat/tc1",
                    prefix: "tomcat_access",
                    suffix: ".log",
                    buffered: "false",
                    pattern: "&quot;%{X-Forwarded-For}i&quot; %h %l %u %t &quot;%r&quot; %s %b %S %I %D"
                },
            ]
        },
        context: {
            resources: {
                jdbcdb1: {
                    auth: "Container",
                    type: "javax.sql.DataSource",
                    username: "@secret:/app/UAI123345/db1/username", // Fill DB username here
                    password: "[DatabasePassword]", //Fill DB Password Here
                    driverClassName: "com.mysql.jdbc.Driver",
                    url: "jdbc:mysql:/[yourserver]:3306/[yourapplication]",
                    maxActive: "15",
                    maxIdle: "3"
                }
            }
        },
        logging: {
            level: "DEBUG"
        }
    }
};

const inputParsers = {
  date(input) {
    const split = input.split('/');
    const day = split[1]
    const month = split[0];
    const year = split[2];
    return `${year}-${month}-${day}`;
  },
  uppercase(input) {
    return input.toUpperCase();
  },
  number(input) {
    return parseFloat(input);
  },
};

export default class FormComponent extends Component {
  constructor() {
      super();
      this.state = {

      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
      event.preventDefault();
      // if (!event.target.checkValidity()) {
      // 	this.setState({
      //     invalid: true,
      //     displayErrors: true,
      //   });
      //   return;
      // }
      const form = event.target;
      const data = new FormData(form);

      for (let name of data.keys()) {
        const input = form.elements[name];
        const parserName = input.dataset.parse;



        if (parserName) {
          const parsedValue = inputParsers[parserName](data.get(name))
          data.set(name, parsedValue);
        }
      }

      this.setState({
      	res: stringifyFormData(data),
        invalid: false,
        displayErrors: false,
      });

      // fetch('/api/form-submit-url', {
      //   method: 'POST',
      //   body: data,
      // });

    }

    // handleChange (event) {
    //     this.setState({
    //         res: stringifyFormData(data),
    //         selectValue: event.target.value
    //     });
    // }

  render() {
    const { res } = this.state;
    const options = [];
    for (var i in data.tomcat.java.opt) {
      options.push(<option value={data.tomcat.java.opt[i]} key={data.tomcat.java.opt[i]}>{data.tomcat.java.opt[i]}</option>)
    }


    return (
      <Form row="true" onSubmit={this.handleSubmit} target="_blank">

        <FormGroup className="mt-3 mr-sm-2 mb-sm-0">
          <Label htmlFor="uai">Application UAI:</Label>
          <Input type="text" name="uai" id="uai" pattern="^UAI[0-9]{5,7}" value={this.state.uai} onChange={this.handleChange} />
          <FormText color="muted">
            Input must start with <b>UAI</b> and include 5-7 numbers.
          </FormText>
        </FormGroup>

        <FormGroup className="mt-3 mr-sm-2 mb-sm-0">
          <Label htmlFor="env">Environment:</Label>
            <Input type="select" name="env" id="env" value={this.state.env} onChange={this.handleChange} required defaultValue="">
              <option disabled value=""> -- Select an Environment -- </option>
              <option value="dev">Development</option>
              <option value="stg">Stage / Test</option>
              <option value="prod">Production</option>
            </Input>
        </FormGroup>

        <FormGroup className="mt-3 mr-sm-2 mb-sm-0">
          <Label htmlFor="app">Application Name:</Label>
          <Input type="text" name="app" id="app" value={this.state.app} onChange={this.handleChange}/>
          <FormText color="muted">
            Enter the application name as it is shown in ServiceNow.
          </FormText>
        </FormGroup>

        <FormGroup className="mt-3 mr-sm-2 mb-sm-0">
          <Label for="filename">Deployment File:</Label>
          <Input type="file" name="filename" id="filename"  value={this.state.filename} onChange={this.handleChange}/>
          <FormText color="muted">
            There is an upload file size limit of 10 Mb.
          </FormText>
        </FormGroup>

        <FormGroup className="mt-3 mr-sm-2 mb-sm-0">
          <Label for="source">Source:</Label>
          <Input type="url" name="source" id="source" disabled placeholder="'https://s3.amazonaws.com/'\{this.state.app\}'/+ \{this.state.filename\}/sample.war'" value={this.state.source} onChange={this.handleChange}/>
          <FormText color="muted">
            Non-Editable field. Field only displays the Amazon Web Services S3 bucket location for your application.
          </FormText>
        </FormGroup>

        <FormGroup className="mt-3 mr-sm-2 mb-sm-0">
          <Label for="checksum">Checksum:</Label>
          <Input type="password" name="checksum" id="checksum" value={this.state.source} onChange={this.handleChange}/>
          <FormText color="muted">
            Enter the 64-character checksum for the Applications deployment file.
          </FormText>
        </FormGroup>

        <FormGroup className="mt-3 mr-sm-2 mb-sm-0">
          <Label htmlFor="middleware">Environment:</Label>
            <Input type="text" name="middleware" id="middleware" disabled onChange={this.handleChange} defaultValue="tomcat" />
        </FormGroup>

        <FormGroup className="mt-3 mr-sm-2 mb-sm-0">
          <Label for="javaOpts">Config Java Opts</Label>
          <Input type="select" name="javaOpts" id="javaOpts" multiple disabled defaultValue="['-Xms512m', '-Xmx512m', '-Dfile.encoding=UTF-8', '-Djava.security.egd=file:/dev/./urandom', '-Dsun.net.inetaddr.ttl=30', '-Djava.net.preferIPv4Stack=true', '-Djava.net.preferIPv4Addresses=true']">
            {options.map((i) => {
              return (<option value={i} key={i}>{i}</option>)
            })}
          </Input>
        </FormGroup>

        <FormGroup className="mt-3 mr-sm-2 mb-sm-0">
            <Button type="submit" value="Submit" className="btn btn-success mt-3" block="true">Submit</Button>
        </FormGroup>

        <div className="mt-3 mx-auto container res-block" md="6">
          <pre>{res}</pre>
        </div>
      </Form>


    );
  }
}

// Function stringifyFormData
function stringifyFormData(fd) {

	for (let key of fd.keys()) {
  	data[key] = fd.get(key);
  }
  return JSON.stringify(data, null, 2);
}
